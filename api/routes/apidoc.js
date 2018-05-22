
   //---------------------------------GLOBAL APIDOC--------------------------------------//

/**
 * @apiDefine error500
 * @apiErrorExample
 *    HTTP/1.1 500 Internal Server Error
 *     {
 *       "success" : false,
 *       "status": 500,
 *       "message": "500 Internal Server Error"
 *     }
 */

 /**
  * @apiDefine error404
  * @apiErrorExample
  *    HTTP/1.1 404 Not Found
  *     {
  *       "success" : false,
  *       "status": 404,
  *       "message": "404 Not Found"
  *     }
  */

  /**
   * @apiDefine error400
   * @apiErrorExample
   *    HTTP/1.1 400 Bad Request
   *     {
   *       "success" : false,
   *       "status": 400,
   *       "message": "400 Bad Request"
   *     }
   */

   /**
   * @apiDefine searchById
   * @apiParam {Integer} id User id
   * @apiParamExample {json} Input
   *    {
   *      "id": 1
   *    }
   */


   //---------------------------------USER APIDOC--------------------------------------//

   /**
    * @apiDefine userCreated
    * @apiSuccess {Object[]} User
    * @apiSuccess {Integer} User.id User id
    * @apiSuccess {String} User.Name User name
    * @apiSuccess {Date} User.updated_at Update's date
    * @apiSuccess {Date} User.created_at Register's date
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 201 OK
    *    [{
    *      "success" : true,
    *      "status" : 201,
    *      "datas" :
    *      {
    *         "id": 1,
    *         "name": "Robin",
    *         "surname" : "Tersou",
    *         "job" : "Chomeur",
    *         "group" :
    *         {
    *            "id" : 1,
    *            "name" : "Group1"
    *         }
    *         "updated_at": "2018-05-14T00:00:00.000Z",
    *         "created_at": "2018-05-14T00:00:00.000Z"
    *      }
    *    }]
    */

    /**
    * @apiDefine userExample
    * @apiParam {String} name User name
    * @apiParam {String} surname User surname
    * @apiParam {String} job User job
    * @apiParam {Integer} group_id User group_id
    * @apiParamExample {json} Input
    *    {
    *      "name": "John",
    *      "surname" : "Doe",
    *      "job" : "Host",
    *      "group_id" : 0
    *    }
    */


     //---------------------------------PASS APIDOC--------------------------------------//

     /**
      * @apiDefine passCreated
      * @apiSuccess {Object[]} Pass
      * @apiSuccess {Integer} Pass.id Pass id
      * @apiSuccess {Integer} User.id User id
      * @apiSuccess {Date} Pass.updated_at Update's date
      * @apiSuccess {Date} Pass.created_at Register's date
      * @apiSuccessExample {json} Success
      *    HTTP/1.1 201 OK
      *    [{
      *      "success" : true,
      *      "status" : 201,
      *      "datas" :
      *      {
      *         "id": 12,
      *         "user_id": 23,
      *         "updated_at": "2018-05-14T00:00:00.000Z",
      *         "created_at": "2018-05-14T00:00:00.000Z"
      *      }
      *    }]
      */

      /**
      * @apiDefine passExample
      * @apiParam {Integer} user_id Pass user_id
      * @apiParamExample {json} Input
      *    {
      *      "user_id": 7
      *    }
      */
