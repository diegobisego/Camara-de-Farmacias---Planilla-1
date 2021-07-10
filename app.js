//CARGAR OS

var os_1 = ["SELECCIONE OS","ASOCIART ART","BERKLEY ART","CAJA DE ABOG","COOP. MEDICA RIO IV","DASUTEN",
            "MEDICAMENTO PRIMER NIVEL","EXPERIENCIA ART","EXPERTA ART","GALENO ART","LA SEGUNDA ART",
            "LIBERTY ART","LIDERAR ART","PLUS ART","OMINT ART","JERARQUICOS SALUD","O.S.A.P.M",
            "OSDEPYM","OSBA","OSDIPP","O.S. PERS. DE FCIAS.","OS.S FEDERACIÓN DE LA CARNE",
            "ORG. ROCA","OSIAD ACEITEROS (FCIAS.AUTORIZADAS)","OSPIC CAUCHO","OSPIT TEXTILES",
            "OSPIP PLÁSTICOS","OSMATA","OSFATLYF","OSFE (OBRA SOCIAL FERROVIARIA )","PODER JUDICIAL",
            "POLICÍA FEDERAL MES ACTUAL","POLICÍA FEDERAL MESES ANTERIORES",
            "POLICIA FEDERAL TRAT ESPECIALES (FCIAS AUT)","PROVINCIA ART",
            "RECETARIO SOLIDARIO 1ºQ JULIO","SIPSSA PREPAGO (PREFIJO 31)","SIPSSA OSPOCE (PREFIJO 29)",
            "SIPSSA OSPOCE APEX (PREFIJO 35)","SIPSSA OSCEP (PREFIJO 32)","SIPSSA ASSPE (PREFIJO 33)",
            "SIPSSA OSIM (PREFIJO 22)","SIPSSA APM (PREFIJO 34)","SIPSSA TA (PREFIJO 36)",
            "SIPSSA PLAN 37 EMPLEADOS","SANCOR SEGUROS INTEGROS","SERVIRED","SWISS MEDICAL VALIDADAS",
            "SWISS MEDICAL NO VALIDADAS","SWISS MEDICAL ART","UNIÓN PERSONAL","VICTORIA ART"];
            
cargar_os = (param) => {
    let select = document.createElement("select");
    param.appendChild(select);
    select.setAttribute("class","form-select")
    for (let i = 0; i < os_1.length; i++) {
        let option = document.createElement("option");
        select.appendChild(option);
        option.innerHTML = os_1[i];        
    }
}            

