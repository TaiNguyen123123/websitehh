var al = document.getElementById('al')
var cu = document.getElementById('cu')
var cl = document.getElementById('cl')

var Hoatri = document.getElementById('hoatri')
var kyhieu = document.getElementById('kyhieu')
var tenngto = document.getElementById('tenngto')
var ngtukhoi = document.getElementById('ntk')
var doamdien = document.getElementById('doamdien')
var electron = document.getElementById('electron')
var oxihoa = document.getElementById('oxihoa')
var ngtoHH = document.getElementsByClassName('ngtoHH')
var data = {
    "al" : {
        "Kyhieu" : "Al",
        "Ten" : "Nhôm",
        "Nguyentukhoi" : "27",
        "Hoatri" : "III",
        "Oxihoa" : "1.21",
    },
    "cu" : {
        "Kyhieu" : "cu",
        "Ten" : "Đồng",
        "Nguyentukhoi" : "64",
        "Hoatri" : " ",
        "Oxihoa" : "124949"
    },
    "cl" : {
        "Kyhieu" : "Cl",
        "Ten" : "Clo",
        "Nguyentukhoi" : "35.5",
        "Hoatri" : "I",
        "Oxihoa" : "12"
    }
}
var ngtoHH = document.getElementsByClassName('ngtoHH')
// Al
ngtoHH[0].addEventListener('click', function(){
    console.log('Đây là nguyên tố Al')
})
al.addEventListener('click',function()
{
    KyHieu.textContent = data.al.Kyhieu
    TenNguyenTo.textContent = data.al.Ten
    NguyenTuKhoi.textContent = data.al.Nguyentukhoi
    HoaTri.textContent = data.al.Hoatri
    OxiHoa.textContent = data.al.oxihoa
})
cu.addEventListener('click',function()
{
    KyHieu.textContent = data.cu.Kyhieu
    TenNguyenTo.textContent = data.cu.Ten
    NguyenTuKhoi.textContent = data.cu.Nguyentukhoi
    HoaTri.textContent = data.cu.Hoatri
    OxiHoa.textContent = data.cu.oxihoa
})
cl.addEventListener('click',function()
{
    KyHieu.textContent = data.cl.Kyhieu
    TenNguyenTo.textContent = data.cl.Ten
    NguyenTuKhoi.textContent = data.cl.Nguyentukhoi
    HoaTri.textContent = data.cl.Hoatri
    OxiHoa.textContent = data.cl.oxihoa
})
