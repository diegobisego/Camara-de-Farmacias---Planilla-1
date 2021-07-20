//CARGAR OS

var os_lista = ["SELECCIONE OS","ASOCIART ART","BERKLEY ART","CAJA DE ABOG","COOP. MEDICA RIO IV","DASUTEN",
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


//CARGAR PLANES
var plan_ASOCIART = ["AMB."];
var plan_BERKLEY = ["AMB."];
var plan_ABOG = ["AMB.","PMI. 100%","ESPECIALES"];
var plan_MEDICA_RIO_IV = ["AMB. 40%","AMB 50%","PMI","CRÓNICOS (40,50%)"];
var plan_DASUTEN = ["AMB. MIXTO","ANTICONCEP. 100%","ACCID. DE TRABAJO","PMI 100%"];
var plan_MEDICAMENTO_PRIMER_NIVEL = ["AMB."];
var plan_EXPERIENCIA_ART = ["AMB."];
var plan_EXPERTA_ART = ["AMB."];
var plan_GALENO_ART = ["AMB."];
var plan_LA_SEGUNDA_ART = ["AMB."];
var plan_LIBERTY_ART = ["AMB."];
var plan_LIDERAR_ART = ["AMB."];
var plan_PLUS_ART = ["AMB."];
var plan_OMINT_ART = ["AMB."];
var plan_JERARQUICOS_SALUD = ["SUMA DE PLANES"];
var plan_OSAPM = ["AMB.","CRON.","PMI","DISCAPACIDAD"];
var plan_OSDEPYM = ["40%","50%","M. F - 70% -100%","PMI"];
var plan_OSBA = ["SUMA DE PLANES"];
var plan_OSDIPP = ["SUMA DE PLANES"];
var plan_OS_PERS_DE_FCIAS = ["AMB.","PMI"];
var plan_OS_S_FEDERACIÓN_DE_LA_CARNE = ["AMB 50%"];
var plan_ORG_ROCA = ["AMB."];
var plan_OSIAD_ACEITEROS = ["AMB 40%","CRON 70%","ANTICONCEPTIVOS","PMI 100%"];
var plan_OSPIC_CAUCHO = ["AMB."];
var plan_OSPIT_TEXTILES =["TOTAL"];
var plan_OSPIP_PLÁSTICOS = ["SUMA DE PLANES"];
var plan_OSMATA = ["SUMA DE PLANES"];
var plan_OSFATLYF = ["BASICO 40%","ESP.-ADHER 50%","PMI ONLINE","ANTICONCEPTIVOS","CRON 70-100%","VARIOS-MIXTOS","AUTORIZACIONES"];
var plan_OSFE = ["AMB. 40%","PMI 100%","AUT. ESP."];
var plan_PODER_JUDICIAL = ["SUMA DE PLANES"];
var plan_POLICIA_FEDERAL_MES_ACTUAL = ["ACTIVOS 50%","ACTIVOS 100%","PASIVOS 50%","PASIVOS 100%","PMI"];
var plan_POLICÍA_FEDERAL_MESES_ANTERIORES = ["ACTIVOS 50%","ACTIVOS 100%","PASIVOS 50%","PASIVOS 100%","PMI"];
var plan_POLICIA_FEDERAL_TRAT_ESPECIALES = ["TRAT. ESPECIALES"];
var plan_PROVINCIA_ART  = ["AMB"];
var plan_RECETARIO_SOLIDARIO = ["VALIDADAS"];
var plan_SIPSSA_PREPAGO = ["AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_OSPOCE = ["AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_OSPOCE_APEX = ["AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_OSCEP = ["AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_ASSP = ["AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_OSIM = ["AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_APM = ["AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_TA = ["AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_PLAN_37_EMPLEADOS = ["AMB 40%","AMB 50%","AUT. ESP."];
var plan_SANCOR_SEGUROS_INTEGROS  = ["AMB"];
var plan_SERVIRED = ["AMB. 40%/50%","CRON. 70%/100%","PMI "];
var plan_SWISS_MEDICAL_VALIDADAS = ["SUMA DE PLANES"];
var plan_SWISS_MEDICAL_NO_VALIDADAS = ["AMB 40%","PMI 100%","AUT 100%"];
var plan_SWISS_MEDICAL_ART = ["AMB"];
var plan_UNIÓN_PERSONAL = ["SUMA DE PLANES","20%"];
var plan_VICTORIA_ART = ["AMB"];


var contador = 0;

//FUNCION Carga las OS
cargar_os = (param) => {
    let select = document.createElement("select");
    param.appendChild(select);
    select.setAttribute("class","form-select");
    select.setAttribute("OnChange","carga_planes_os()");
    select.setAttribute("id","select_os" + bandera);
    for (let i = 0; i < os_lista.length; i++) {
        let option = document.createElement("option"); //genero el primer option
        select.appendChild(option); // lo append
        option.innerHTML = os_lista[i]; //le agrego el texto de el array de la posicion
        option.setAttribute("value",contador); //agrego un
        option.setAttribute("id","id"+contador);
        contador++        
    }
    contador = 0;

    carga_plan_dinamico = (param1) => {
        for (i in param1) {
            let pos_lista_plan = document.getElementById("id_planes_lista" + bandera);
            let option = document.createElement("option");
            pos_lista_plan.appendChild(option);
            option.innerText = param1[i];                        
        }
        boton.disabled = false;
    }

    
    carga_planes_os = () => {
        select.disabled = true;
        let id_select = document.getElementById("select_os"+bandera);
        let value_id_select = id_select.value;
        let pos_lista_plan = document.getElementById("id_planes_lista"+bandera);

            switch (value_id_select) {
                case "1":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_ASOCIART);
                    } else {
                        carga_plan_dinamico(plan_ASOCIART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;

                    case "2":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_BERKLEY);
                    } else {
                        carga_plan_dinamico(plan_BERKLEY);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    
                    case "3":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_ABOG);
                    } else {
                        carga_plan_dinamico(plan_ABOG);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "4":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_MEDICA_RIO_IV);
                    } else {
                        carga_plan_dinamico(plan_MEDICA_RIO_IV);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "5":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_DASUTEN);
                    } else {
                        carga_plan_dinamico(plan_DASUTEN);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "6":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_MEDICAMENTO_PRIMER_NIVEL);
                    } else {
                        carga_plan_dinamico(plan_MEDICAMENTO_PRIMER_NIVEL);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "7":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_EXPERIENCIA_ART);
                    } else {
                        carga_plan_dinamico(plan_EXPERIENCIA_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "8":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_EXPERTA_ART);
                    } else {
                        carga_plan_dinamico(plan_EXPERTA_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "9":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_GALENO_ART);
                    } else {
                        carga_plan_dinamico(plan_GALENO_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "10":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_LA_SEGUNDA_ART);
                    } else {
                        carga_plan_dinamico(plan_LA_SEGUNDA_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "11":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_LIBERTY_ART);
                    } else {
                        carga_plan_dinamico(plan_LIBERTY_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "12":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_LIDERAR_ART);
                    } else {
                        carga_plan_dinamico(plan_LIDERAR_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "13":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_PLUS_ART);
                    } else {
                        carga_plan_dinamico(plan_PLUS_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "14":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OMINT_ART);
                    } else {
                        carga_plan_dinamico(plan_OMINT_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "15":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_JERARQUICOS_SALUD);
                    } else {
                        carga_plan_dinamico(plan_JERARQUICOS_SALUD);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "16":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSAPM);
                    } else {
                        carga_plan_dinamico(plan_OSAPM);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "17":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSDEPYM);
                    } else {
                        carga_plan_dinamico(plan_OSDEPYM);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "18":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSBA);
                    } else {
                        carga_plan_dinamico(plan_OSBA);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "19":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSDIPP);
                    } else {
                        carga_plan_dinamico(plan_OSDIPP);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "20":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OS_PERS_DE_FCIAS);
                    } else {
                        carga_plan_dinamico(plan_OS_PERS_DE_FCIAS);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "21":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OS_S_FEDERACIÓN_DE_LA_CARNE);
                    } else {
                        carga_plan_dinamico(plan_OS_S_FEDERACIÓN_DE_LA_CARNE);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "22":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_ORG_ROCA);
                    } else {
                        carga_plan_dinamico(plan_ORG_ROCA);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "23":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSIAD_ACEITEROS);
                    } else {
                        carga_plan_dinamico(plan_OSIAD_ACEITEROS);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "24":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSPIC_CAUCHO);
                    } else {
                        carga_plan_dinamico(plan_OSPIC_CAUCHO);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "25":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSPIT_TEXTILES);
                    } else {
                        carga_plan_dinamico(plan_OSPIT_TEXTILES);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "26":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSPIP_PLÁSTICOS);
                    } else {
                        carga_plan_dinamico(plan_OSPIP_PLÁSTICOS);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "27":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSMATA);
                    } else {
                        carga_plan_dinamico(plan_OSMATA);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "28":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSFATLYF);
                    } else {
                        carga_plan_dinamico(plan_OSFATLYF);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "29":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSFE);
                    } else {
                        carga_plan_dinamico(plan_OSFE);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "30":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_PODER_JUDICIAL);
                    } else {
                        carga_plan_dinamico(plan_PODER_JUDICIAL);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "31":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_POLICIA_FEDERAL_MES_ACTUAL);
                    } else {
                        carga_plan_dinamico(plan_POLICIA_FEDERAL_MES_ACTUAL);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "32":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_POLICÍA_FEDERAL_MESES_ANTERIORES);
                    } else {
                        carga_plan_dinamico(plan_POLICÍA_FEDERAL_MESES_ANTERIORES);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "33":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_POLICIA_FEDERAL_TRAT_ESPECIALES);
                    } else {
                        carga_plan_dinamico(plan_POLICIA_FEDERAL_TRAT_ESPECIALES);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "34":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_PROVINCIA_ART);
                    } else {
                        carga_plan_dinamico(plan_PROVINCIA_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "35":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_RECETARIO_SOLIDARIO);
                    } else {
                        carga_plan_dinamico(plan_RECETARIO_SOLIDARIO);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "36":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SIPSSA_PREPAGO);
                    } else {
                        carga_plan_dinamico(plan_SIPSSA_PREPAGO);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "37":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SIPSSA_OSPOCE);
                    } else {
                        carga_plan_dinamico(plan_SIPSSA_OSPOCE);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "38":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SIPSSA_OSPOCE_APEX);
                    } else {
                        carga_plan_dinamico(plan_SIPSSA_OSPOCE_APEX);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "39":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SIPSSA_OSCEP);
                    } else {
                        carga_plan_dinamico(plan_SIPSSA_OSCEP);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "40":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SIPSSA_ASSP);
                    } else {
                        carga_plan_dinamico(plan_SIPSSA_ASSP);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "41":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SIPSSA_OSIM);
                    } else {
                        carga_plan_dinamico(plan_SIPSSA_OSIM);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;

                    case "42":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SIPSSA_APM);
                    } else {
                        carga_plan_dinamico(plan_SIPSSA_APM);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "43":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SIPSSA_TA);
                    } else {
                        carga_plan_dinamico(plan_SIPSSA_TA);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "44":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SIPSSA_PLAN_37_EMPLEADOS);
                    } else {
                        carga_plan_dinamico(plan_SIPSSA_PLAN_37_EMPLEADOS);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "45":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SANCOR_SEGUROS_INTEGROS);
                    } else {
                        carga_plan_dinamico(plan_SANCOR_SEGUROS_INTEGROS);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "46":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SERVIRED);
                    } else {
                        carga_plan_dinamico(plan_SERVIRED);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "47":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SWISS_MEDICAL_VALIDADAS);
                    } else {
                        carga_plan_dinamico(plan_SWISS_MEDICAL_VALIDADAS);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "48":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SWISS_MEDICAL_NO_VALIDADAS);
                    } else {
                        carga_plan_dinamico(plan_SWISS_MEDICAL_NO_VALIDADAS);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "49":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SWISS_MEDICAL_ART);
                    } else {
                        carga_plan_dinamico(plan_SWISS_MEDICAL_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "50":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_UNIÓN_PERSONAL);
                    } else {
                        carga_plan_dinamico(plan_UNIÓN_PERSONAL);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "51":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_VICTORIA_ART);
                    } else {
                        carga_plan_dinamico(plan_VICTORIA_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;


                    default:
                        break;
            }
                
    }
}


elimina_nodos = (param1,param2) => {
    let hijos = document.getElementById(param1);
    let padre = document.getElementById(param2);
    padre.removeChild(hijos);

}


remove = (id) => {
    document.getElementById(id).remove()
    boton.disabled = false;
}
