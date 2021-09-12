from flask import Flask,render_template

app=Flask(__name__)

@app.route('/')
def index():
   return render_template('TrangChu.html')

@app.route('/trangchu')
def trangchu():
   return render_template('TrangChu.html')

@app.route('/SPBanChay')
def SPBanChay():
   return render_template('SPBanChay.html')

@app.route('/SPGiamGia')
def SPGiamGia():
   return render_template('SPGiamGia.html')

@app.route('/SPHot')
def SPHot():
   return render_template('SPHot.html')

@app.route('/SPMoiNhat')
def SPMoiNhat():
   return render_template('SPMoiNhat.html')

@app.route('/dangky')
def dangky():
   return render_template('dangky.html')

@app.route('/dangnhap')
def dangnhap():
   return render_template('dangnhap.html')

@app.route('/quenmk')
def quenmk():
   return render_template('quenmk.html')

@app.route('/trogiup')
def trogiup():
   return render_template('trogiup.html')

@app.route('/giohang')
def cark():
   return render_template('giohang.html')

@app.route('/thongtin')
def thongtin():
   return render_template('thongtin.html')
@app.route('/admin')
def quanlynhom():
   return render_template('QuanLyNhom.html')

@app.route('/nhom')
def nhom():
   return render_template('QuanLyNhom.html')

@app.route('/sanpham')
def qlsp():
   return render_template('danhsachsp.html')

@app.route('/user')
def qluser():
   return render_template('QuanLyUser.html')

@app.route('/donhang')
def qldon():
   return render_template('QuanLyDonHang.html')

@app.route('/xemdonhang')
def xemdon():
   return render_template('ThongTinDonHang.html')



if __name__ == '__main__':
    app.run()

