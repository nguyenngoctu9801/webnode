const getHomePage = (req,res) =>{
     res.render('samble.ejs');
}
const getUserPage = (req, res) => {
    res.send('user')
  }

  const getSanPham1 = (req, res) => {
    res.render('container/sanpham1.ejs');
  }
  const getSanPham2 = (req, res) => {
    res.render('container/sanpham2.ejs');
  }
  const getSanPham3 = (req, res) => {
    res.render('container/sanpham3.ejs');
  }
  const getSanPham4 = (req, res) => {
    res.render('container/sanpham4.ejs');
  }
  const getSanPham5 = (req, res) => {
    res.render('container/sanpham5.ejs');
  }
  const getSanPham6 = (req, res) => {
    res.render('container/sanpham6.ejs');
  }
  const getSanPham7 = (req, res) => {
    res.render('container/sanpham7.ejs');
  }
  const getSanPham8 = (req, res) => {
    res.render('container/sanpham8.ejs');
  }
  const getSanPham9 = (req, res) => {
    res.render('container/sanpham9.ejs');
  }
  const getOverView = (req, res) => {
    res.render('container/overview.ejs');
  }


module.exports ={
    getHomePage,
    getUserPage,
    getSanPham1,
    getSanPham2,
    getSanPham3,
    getSanPham4,
    getSanPham5,
    getSanPham6,
    getSanPham7,
    getSanPham8,
    getSanPham9,
    getOverView,
}