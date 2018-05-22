define({ "api": [
  {
    "type": "get",
    "url": "/User",
    "title": "get User",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "User",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "User.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.Name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "User.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 1,\n  \"name\": \"Name\",\n    \"surname\" : \"Surname\",\n    \"job\" : \"Job\",\n    \"group\" :\n    {\n       \"id\" : 1,\n       \"name\" : \"Group1\"\n    }\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "GetUser"
  },
  {
    "type": "post",
    "url": "/User",
    "title": "add User",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>User surname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>User job</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "group_id",
            "description": "<p>User group_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"John\",\n    \"surname\" : \"Doe\",\n    \"job\" : \"Host\",\n    \"group_id\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "User",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "User.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.Name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.job",
            "description": "<p>User job</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User.Group",
            "description": "<p>User group</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "User.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "User.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n[{\n  \"id\": \"1\"\n  \"name\": \"John\"\n    \"surname\" : \"Doe\"\n    \"job\" : \"Host\",\n    \"group\" :\n    {\n       \"id\" : 1,\n       \"name\" : \"Group1\"\n    }\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "PostUser"
  }
] });
