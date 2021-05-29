import express from 'express'
import cors from 'cors'
import dialogflow from '@google-cloud/dialogflow'
import bodyParser from 'body-parser'

import keys from '../keys.json'

const app = express()
const sessionClient = new dialogflow.SessionsClient({
  credentials: keys,
})
// const uuid = require('uuid')

app.use(cors())
app.use(bodyParser.json())

app.post('/message', async (req, res) => {
  const projectId = process.env.PROJECT_ID || 'dialog-flow-testing-314302'
  // const sessionId = uuid.v4()
  const fixedSession = req.body.session
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    fixedSession
  )

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: req.body.queryInput.text.text,
        languageCode: process.env.BOT_LANGUAGE || 'en',
      },
    },
  }
  // console.log(request)

  try {
    const result = await sessionClient.detectIntent(request)
    if (result[0].queryResult.fulfillmentMessages[1]) {
      const getPayload =
        result[0].queryResult.fulfillmentMessages[1].payload.fields.payload
      const getValue = getPayload.listValue.values
      const getType = getValue.map((x) => {
        const splitType = x.structValue.fields.data

        if (splitType.listValue) {
          const newArray = splitType.listValue.values.map(
            (x) => x.structValue.fields
          )
          return {
            type: x.structValue.fields.type.stringValue,
            data: newArray,
          }
        } else {
          return {
            type: x.structValue.fields.type.stringValue,
            data: splitType.structValue.fields,
          }
        }
      })
      res.json({
        text: result[0].queryResult.fulfillmentMessages[0].text.text[0],
        payload: getType,
      })
    } else {
      res.json({
        text: result[0].queryResult.fulfillmentMessages[0].text.text[0],
        payload: [],
      })
    }
  } catch (error) {
    console.error('ERROR', error)
  }
})

app.post('/converse/challenge', (req, res) => {
  res.json({
    challenge: req.body.payload.message.text,
  })
})

export default {
  path: '/handlers',
  handler: app,
}
