const dateFormated = (date) => {
  const dateF = new Date(date)
  const dia = dateF.getDate().toString(),
  diaF = (dia.length == 1) ? '0' + dia : dia,
  mes = (dateF.getMonth() + 1).toString(),
  mesF = (mes.length == 1) ? '0' + mes : mes,
  anoF = dateF.getFullYear()
  return diaF + "/" + mesF + "/" + anoF
}

export default dateFormated
