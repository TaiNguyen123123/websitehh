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

al.addEventListener('click',function()
{
    kyhieu.textContent = data.al.Kyhieu
    tenngto.textContent = data.al.Ten
    ngtukhoi.textContent = data.al.Nguyentukhoi
    Hoatri.textContent = data.al.Hoatri
    oxihoa.textContent = data.al.oxihoa
})
cu.addEventListener('click',function()
{
    kyhieu.textContent = data.cu.Kyhieu
    tenngto.textContent = data.cu.Ten
    ngtukhoi.textContent = data.cu.Nguyentukhoi
    Hoatri.textContent = data.cu.Hoatri
    oxihoa.textContent = data.cu.oxihoa
})
cl.addEventListener('click',function()
{
    kyhieu.textContent = data.cl.Kyhieu
    tenngto.textContent = data.cl.Ten
    ngtukhoi.textContent = data.cl.Nguyentukhoi
    Hoatri.textContent = data.cl.Hoatri
    oxihoa.textContent = data.cl.oxihoa
})
