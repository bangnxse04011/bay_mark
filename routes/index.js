const express = require('express');
const router = express.Router();
const usersDAO = require('../public/javascripts/usersDAO');
const error = require('../public/javascripts/error');

/* GET home page. */
router.get('/' , (req,res) => {
  res.render('login');
});

router.get('/doLogin/:id' , (req,res,next) => {
  var ids = req.params['id']; 
  if(isNaN(ids) || ids == '' || ids == null) {
    next(error.show_error('Sai duong dan'));
    return;
  }
  let user;
  if(req.session.user != null) {
    user = req.session.user;
  }
  let users = usersDAO.findUserByID(ids).then( function(UserDevice) {
      console.log(req.session.email);
      res.render('index' , {
        title : 'Homepage',
        user_login : user,
        list_data : UserDevice.dataValues
      });
  }); 
});

router.get('/view' , (req,res) => {
  req.session.user = 'Bangnx1';
  let user;

  let users = usersDAO.findAllUser().then( function(UserDevice) {
    res.render('index' , {
      title : 'Homepage',
      user_login : user,
      list_data : UserDevice
    });
  }); 
});

module.exports = router;
