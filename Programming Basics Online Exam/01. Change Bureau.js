function changeBureau(bitcoins, chineseYuan, commission){
    bitcoins = Number(bitcoins);
    chineseYuan = Number(chineseYuan);
    commission = Number(commission);

    let bitcoinToLevsValue = 1168 * bitcoins;
    let yuanToLevsValue = 0.15 * chineseYuan * 1.76;
    let euroValue = (bitcoinToLevsValue + yuanToLevsValue) / 1.95;
    
    console.log((euroValue * (100 - commission) * 0.01).toFixed(2));
}

changeBureau(1, 5, 5)