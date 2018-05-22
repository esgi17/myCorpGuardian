define({ "api": [
  {
    "type": "delete",
    "url": "/pass",
    "title": "DELETE Pass",
    "group": "pass",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Pass deleted",
          "content": "HTTP/1.1 200 Pass deleted\n {\n   \"success\" : true\n   \"status\": 200\n   \"message\": \"Pass deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/pass.js",
    "groupTitle": "pass",
    "name": "DeletePass",
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
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/Pass",
    "title": "GET Pass",
    "group": "pass",
    "version": "0.0.0",
    "filename": "./routes/pass.js",
    "groupTitle": "pass",
    "name": "GetPass",
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
            "field": "Pass",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Pass.id",
            "description": "<p>Pass id</p>"
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
            "type": "Date",
            "optional": false,
            "field": "Pass.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Pass.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"user_id\": 23,\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/Pass",
    "title": "ADD Pass",
    "group": "pass",
    "version": "0.0.0",
    "filename": "./routes/pass.js",
    "groupTitle": "pass",
    "name": "PostPass",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>Pass user_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"user_id\": 7\n}",
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
            "field": "Pass",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Pass.id",
            "description": "<p>Pass id</p>"
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
            "type": "Date",
            "optional": false,
            "field": "Pass.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Pass.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"user_id\": 23,\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/Pass",
    "title": "UPDATE Pass",
    "group": "pass",
    "version": "0.0.0",
    "filename": "./routes/pass.js",
    "groupTitle": "pass",
    "name": "PutPass",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>Pass user_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"user_id\": 7\n}",
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
            "field": "Pass",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Pass.id",
            "description": "<p>Pass id</p>"
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
            "type": "Date",
            "optional": false,
            "field": "Pass.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Pass.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"user_id\": 23,\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "DELETE User",
    "group": "user",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 User deleted",
          "content": "HTTP/1.1 200 User deleted\n {\n   \"success\" : true\n   \"status\": 200\n   \"message\": \"User deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "DeleteUser",
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
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/User",
    "title": "GET User",
    "group": "user",
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "GetUser",
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
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 1,\n     \"name\": \"Robin\",\n     \"surname\" : \"Tersou\",\n     \"job\" : \"Chomeur\",\n     \"group\" :\n     {\n        \"id\" : 1,\n        \"name\" : \"Group1\"\n     }\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/User",
    "title": "ADD User",
    "group": "user",
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "PostUser",
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
          "content": "{\n  \"name\": \"John\",\n  \"surname\" : \"Doe\",\n  \"job\" : \"Host\",\n  \"group_id\" : 0\n}",
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
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 1,\n     \"name\": \"Robin\",\n     \"surname\" : \"Tersou\",\n     \"job\" : \"Chomeur\",\n     \"group\" :\n     {\n        \"id\" : 1,\n        \"name\" : \"Group1\"\n     }\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/User",
    "title": "UPDATE User",
    "group": "user",
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "PutUser",
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
          "content": "{\n  \"name\": \"John\",\n  \"surname\" : \"Doe\",\n  \"job\" : \"Host\",\n  \"group_id\" : 0\n}",
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
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 1,\n     \"name\": \"Robin\",\n     \"surname\" : \"Tersou\",\n     \"job\" : \"Chomeur\",\n     \"group\" :\n     {\n        \"id\" : 1,\n        \"name\" : \"Group1\"\n     }\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  }
] });
