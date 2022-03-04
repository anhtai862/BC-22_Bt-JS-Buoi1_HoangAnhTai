/**
 * Bài Tập 1:
 * Đầu Vào:
 * - tienLuongNgay = 100.000vnđ
 * - songaylam
 * Xử lý : 
 * - tienLuongNgay * songaylam
 * Đầu ra : Hiển Thị Thông Báo
 */



 var tienLuongNgay ;
 var songaylam;
 tienLuongNgay = 100000;
 songaylam = 30 ;
 console.log(tienLuongNgay);
 console.log(songaylam);
 var tinhLuong = tienLuongNgay * songaylam ;
 var currentFormat = new Intl.NumberFormat('vn-Vn');
 var ketQua = "Lương Nhân Viên Nhân Là :" + " " + currentFormat.format(tinhLuong) + "VNĐ"


 console.log(ketQua);
    
    



/**
 * Bài Tập 2 :
 * Đầu Vào :
 * - Gía trị 5 số thực
 * - number1
 * - number2
 * - number3
 * - number4
 * - number5

 * Xử lý 
 * - ( number1 + number2 + number3 + number4 + number5 ) / 5
 * Đầu ra : Hiển Thị Thông Báo
 * 
 */


    var number1 ;
    var number2 ;
    var number3 ;
    var number4 ;
    var number5 ;
    number1 = 4 ;
    number2 = 5 ;
    number3 = 6 ;
    number4 = 7 ;
    number5 = 8 ;
    console.log(number1);
    console.log(number2);
    console.log(number3);
    console.log(number4);
    console.log(number5);

    var tong = number1 + number2 + number3 + number4 + number5;
    var trungBinh = tong / 5;
    var ketqua = "Trung Bình Tổng 5 Số :" + trungBinh ;
    console.log(ketqua);


    



    




/**
 * Bài Tập 3:
 * 
 * Đầu Vào :
 * giatri1do
 * soDolaCanDoi
 * XỬ lý : soDolaCanDoi * giatri1do
 * Đầu ra : Hiển Thị Thông Báo
 * 
 */




    var giatri1do;
    var soDolaCanDoi ;
    giatri1do = 23500;
    soDolaCanDoi = 200;
console.log(giatri1do);
console.log(soDolaCanDoi);

    var quydoitien = giatri1do * soDolaCanDoi ;
    var currentFormat = new Intl.NumberFormat('vn-VN');
    var ketQua = "Số Tiền Quy Đổi : " + currentFormat.format(quydoitien) + " " + "VNĐ";
console.log(ketQua);





/**
 * Bài Tập 4
 * 
 * Đầu Vào :
 * - chieuDai
 * - chieuRong
 * XỬ lý :
 * chuVi = (chieuDai + chieuRong) * 2 ;
 * dienTich = chieuDai * chieuRong;
 * Đầu ra : Hiển Thị Thông Báo
 * 
 */ 


 var chieuDai ;
 var chieuRong ;
 chieuDai = 20;
 chieuRong = 25 ;
console.log(chieuDai);
console.log(chieuRong);

 var chuVi = (chieuDai + chieuRong) * 2 ;
 var dienTich = chieuDai * chieuRong ;
 
 var ketQuaChuVi = " Chu Vi Hình Chữ Nhật :" + chuVi + " " + "Cm";
 var ketQuaDienTich = " Diện Tích Hình Chữ Nhật :" + dienTich + " " + "Cm";

console.log(ketQuaChuVi);
console.log(ketQuaDienTich);








/**
 * Bài Tập 5:
 * 
 * Đầu Vào :
 * - so2KySo
 * XỬ Lý :
 * - tách số hàng đơn vị : n%10
 * - tách số hàng chục : Math.floor(n%100/10)
 * - đơn vị + hàng chục => tổng 2 ký số ?
 * Đầu ra : Hiển Thị Thông Báo
 * 
 * 
 */



    var so2KySo ;
    so2KySo = 25 ;
console.log(so2KySo);
    var hangDonVi = so2KySo%10;
console.log(hangDonVi);
    var hangchuc = Math.floor(so2KySo%100/10);
console.log(hangchuc);
    var tong2KySo = hangDonVi + hangchuc ;
    var ketQua = "Tổng 2 Ký Số :" + tong2KySo;
console.log(ketQua);




