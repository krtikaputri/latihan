var uang = 100000;
var harga = 50000;
var diskon = 20000;

if (uang == harga){
    console.log(`uang pas`);
}

else if (uang + diskon == harga){
    console.log(`anda mendapatkan diskon sebesar rp.${diskon}`);
}

else if (uang > harga){
    console.log(`kembalian`)
};

else if ( uang > 30000 || uang < 25000){
    console.log(`yakin tidak akan memakai diskon?`);
}

else if (uang < harga ){
    console.log(`uang kurang`);
}