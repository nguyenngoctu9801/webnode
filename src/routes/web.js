
const express = require('express')
const router = express.Router();
const {getHomePage
    ,getUserPage
    ,getSanPham1
    ,getSanPham2,
    getSanPham3,
    getSanPham4,
    getSanPham5,
    getSanPham6,
    getSanPham7,
    getSanPham8,
    getSanPham9,
    getOverView,
} = require('../controllers/homeController')

router.get('/',getHomePage)
router.get('/user',getUserPage )
router.get('/SanPham1',getSanPham1 )
router.get('/SanPham2',getSanPham2 )
router.get('/SanPham3',getSanPham3 )
router.get('/SanPham4',getSanPham4 )
router.get('/SanPham5',getSanPham5 )
router.get('/SanPham6',getSanPham6 )
router.get('/SanPham7',getSanPham7 )
router.get('/SanPham8',getSanPham8 )
router.get('/SanPham9',getSanPham9 )
router.get('/overview',getOverView )


module.exports = router ;
  