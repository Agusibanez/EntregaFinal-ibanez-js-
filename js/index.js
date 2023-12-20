function calcularCuotaYMonto() {
    let sueldo1 = parseFloat(document.getElementById("sueldo1").value);
    let sueldo2 = parseFloat(document.getElementById("sueldo2").value);
    let sueldo3 = parseFloat(document.getElementById("sueldo3").value);

    let sueldos = [sueldo1, sueldo2, sueldo3];

    let cuota = calcularCuotaPrestamo(sueldos);
    let montoPrestamo = calcularMontoPrestamoConInteres(sueldos);

    mostrarResultado("resultadoCuota", "Cuota mensual del préstamo: $" + cuota.toFixed(2));
    mostrarResultado("resultadoMonto", "Puedes pedir prestado hasta: $" + montoPrestamo);
}
  
  function mostrarResultado(idElemento, mensaje) {
    let resultadoDiv = document.getElementById(idElemento);
    resultadoDiv.innerHTML = mensaje;
  }
  function calcularCuotaPrestamo(sueldos) {
    if (sueldos.some(isNaN)) {
        return "Ingrese números válidos en todos los campos.";
    }

    if (sueldos.length < 3) {
        return "No hay suficientes recibos de sueldo para calcular la cuota.";
    }

    let sueldoPromedio = sueldos.reduce((total, sueldo) => total + sueldo) / sueldos.length;
    let cuota = sueldoPromedio * 0.1; // Cuota del 10% del sueldo promedio
    let plazo = 12; // para este ejemplo utilizo 12 meses, pero podria cambiarlo en algun momento para que fuera una variable donde elijan las cuotas

    // Calcular el monto del préstamo usando la fórmula del valor presente
    let montoPrestamo = cuota * ((1 - Math.pow(1 + 0.1, -plazo)) / 0.1);

    return cuota;
}
  
  function calcularMontoPrestamoConInteres(sueldos) {
    if (sueldos.some(isNaN)) {
      return "Ingrese números válidos en todos los campos.";
    }
  
    if (sueldos.length < 3) {
      return "No hay suficientes recibos de sueldo para calcular el monto del préstamo.";
    }
  
    let sueldoPromedio = sueldos.reduce((total, sueldo) => total + sueldo) / sueldos.length;
    let cuota = sueldoPromedio * 0.3; // Cuota del 30% del sueldo promedio
    let interes = 0.1; // Tasa de interés del 10%
    let plazo = 12; // para este ejemplo utilizo 12 meses, pero podria cambiarlo en algun momento para que fuera una variable donde elijan las cuotas
  
    // Calcular el monto del préstamo usando la fórmula del valor presente con interés
    let montoPrestamo = cuota * ((1 - Math.pow(1 + interes, -plazo)) / interes);
  
    return montoPrestamo.toFixed(2);
  }