function birthdayParty(rent) {
    let cake = Number(rent) * 0.20
    let drinks = cake * 0.55
    let animator = Number(rent) / 3
    let budget = cake + drinks + animator + Number(rent)
    console.log(budget)
}

birthdayParty(3720)