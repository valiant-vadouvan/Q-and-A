# Q-and-A
## Server API

### Get Questions List
  * GET `/api/qa/questions`

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "body": "String",
      "date": "Timestamp",
      "asker_id": "String",
      "helpfulness": "Number",
      "reported": "Boolean",
      "answers_id": "Number"
    }
```

### Get Answers List
  * GET `/api/qa/questions/:question_id/answers`

**Path Parameters:**
  * `question_id` question id


**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "body": "String",
      "date": "Timestamp",
      "answerer_name": "String",
      "helpfulness": "Number",
      "photo_id": "Number"
    }
```

### Get Photos
  * GET `/api/qa/questions/:question_id/answers/:photo_id`

**Path Parameters:**
  * `photo_id` photo id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "url": "String"
    }
```
