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

//CARGA DE CODIGOS
var cod_planes = [115,22,18,218,518,21,8,2900,153,137,125,2550,126,5800,122,8702,301,8501,5408,307,2,71,
            898,76,69,420,758,6800,300,2673,2000,8500,81,481,781,208,100];


//CARGAR PLANES
var plan_ASOCIART = ["SELECCIONE PLAN","AMB."];
var plan_BERKLEY = ["SELECCIONE PLAN","AMB."];
var plan_ABOG = ["SELECCIONE PLAN","AMB.","PMI. 100%","ESPECIALES"];
var plan_MEDICA_RIO_IV = ["SELECCIONE PLAN","AMB 40%","AMB 50%","PMI","CRÓNICOS (40,50%)"];
var plan_DASUTEN = ["SELECCIONE PLAN","AMB. MIXTO","ANTICONCEP. 100%","ACCID. DE TRABAJO","PMI 100%"];
var plan_MEDICAMENTO_PRIMER_NIVEL = ["SELECCIONE PLAN","AMB."];
var plan_EXPERIENCIA_ART = ["SELECCIONE PLAN","AMB."];
var plan_EXPERTA_ART = ["SELECCIONE PLAN","AMB."];
var plan_GALENO_ART = ["SELECCIONE PLAN","AMB."];
var plan_LA_SEGUNDA_ART = ["SELECCIONE PLAN","AMB."];
var plan_LIBERTY_ART = ["SELECCIONE PLAN","AMB."];
var plan_LIDERAR_ART = ["SELECCIONE PLAN","AMB."];
var plan_PLUS_ART = ["SELECCIONE PLAN","AMB."];
var plan_OMINT_ART = ["SELECCIONE PLAN","AMB."];
var plan_JERARQUICOS_SALUD = ["SELECCIONE PLAN","SUMA DE PLANES"];
var plan_OSAPM = ["SELECCIONE PLAN","AMB.","CRON.","PMI","DISCAPACIDAD"];
var plan_OSDEPYM = ["SELECCIONE PLAN","40%","50%","M. F - 70% -100%","PMI"];
var plan_OSBA = ["SELECCIONE PLAN","SUMA DE PLANES"];
var plan_OSDIPP = ["SELECCIONE PLAN","SUMA DE PLANES"];
var plan_OS_PERS_DE_FCIAS = ["SELECCIONE PLAN","AMB.","PMI"];
var plan_OS_S_FEDERACIÓN_DE_LA_CARNE = ["SELECCIONE PLAN","AMB 50%"];
var plan_ORG_ROCA = ["SELECCIONE PLAN","AMB."];
var plan_OSIAD_ACEITEROS = ["SELECCIONE PLAN","AMB 40%","CRON 70%","ANTICONCEPTIVOS","PMI 100%"];
var plan_OSPIC_CAUCHO = ["SELECCIONE PLAN","AMB."];
var plan_OSPIT_TEXTILES =["SELECCIONE PLAN","TOTAL"];
var plan_OSPIP_PLÁSTICOS = ["SELECCIONE PLAN","SUMA DE PLANES"];
var plan_OSMATA = ["SELECCIONE PLAN","SUMA DE PLANES"];
var plan_OSFATLYF = ["SELECCIONE PLAN","BASICO 40%","ESP.-ADHER 50%","PMI ONLINE","ANTICONCEPTIVOS","CRON 70-100%","VARIOS-MIXTOS","AUTORIZACIONES"];
var plan_OSFE = ["SELECCIONE PLAN","AMB. 40%","PMI 100%","AUT. ESP."];
var plan_PODER_JUDICIAL = ["SUMA DE PLANES"];
var plan_POLICIA_FEDERAL_MES_ACTUAL = ["SELECCIONE PLAN","ACTIVOS 50%","ACTIVOS 100%","PASIVOS 50%","PASIVOS 100%","PMI"];
var plan_POLICÍA_FEDERAL_MESES_ANTERIORES = ["SELECCIONE PLAN","ACTIVOS 50%","ACTIVOS 100%","PASIVOS 50%","PASIVOS 100%","PMI"];
var plan_POLICIA_FEDERAL_TRAT_ESPECIALES = ["SELECCIONE PLAN","TRAT. ESPECIALES"];
var plan_PROVINCIA_ART  = ["SELECCIONE PLAN","AMB"];
var plan_RECETARIO_SOLIDARIO = ["SELECCIONE PLAN","VALIDADAS"];
var plan_SIPSSA_PREPAGO = ["SELECCIONE PLAN","AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_OSPOCE = ["SELECCIONE PLAN","AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_OSPOCE_APEX = ["SELECCIONE PLAN","AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_OSCEP = ["SELECCIONE PLAN","AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_ASSP = ["SELECCIONE PLAN","AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_OSIM = ["SELECCIONE PLAN","AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_APM = ["SELECCIONE PLAN","AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_TA = ["SELECCIONE PLAN","AMB 40%","AMB 50%","AUT. ESP."];
var plan_SIPSSA_PLAN_37_EMPLEADOS = ["SELECCIONE PLAN","AMB 40%","AMB 50%","AUT. ESP."];
var plan_SANCOR_SEGUROS_INTEGROS  = ["SELECCIONE PLAN","AMB"];
var plan_SERVIRED = ["SELECCIONE PLAN","AMB. 40%/50%","CRON. 70%/100%","PMI "];
var plan_SWISS_MEDICAL_VALIDADAS = ["SELECCIONE PLAN","SUMA DE PLANES"];
var plan_SWISS_MEDICAL_NO_VALIDADAS = ["SELECCIONE PLAN","AMB 40%","PMI 100%","AUT 100%"];
var plan_SWISS_MEDICAL_ART = ["SELECCIONE PLAN","AMB"];
var plan_UNIÓN_PERSONAL = ["SELECCIONE PLAN","SUMA DE PLANES","20%"];
var plan_VICTORIA_ART = ["SELECCIONE PLAN","AMB"];



var contador = 0;

//FUNCION Carga las OS
cargar_os = (param) => {
    let select = document.createElement("select");
    param.appendChild(select);
    select.setAttribute("class","sizeF2");
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
//FUNCION CARGA PLANES
carga_plan_dinamico = (param1) => {
    for (i in param1) {
        let pos_lista_plan = document.getElementById("id_planes_lista" + bandera);
        let option = document.createElement("option");
        pos_lista_plan.appendChild(option);
        option.innerText = param1[i];                        
    }
    boton.disabled = false;
}


//FUNCION QUE CONTEMPLA LA CARGA DE PLANES INCLUYENDO LO DINAMICO    
carga_planes_os = () => {
    select.disabled = true;
    let id_select = document.getElementById("select_os"+bandera);
    let value_id_select = id_select.value;
    let pos_lista_plan = document.getElementById("id_planes_lista"+bandera);
        switch (value_id_select) {
            case "1":                       
                    carga_plan_dinamico(plan_ASOCIART);
                    pos_lista_plan.disabled = false; 
                    return value_id_select;     
            case "2":                       
                carga_plan_dinamico(plan_BERKLEY);
                pos_lista_plan.disabled = false;                   
                break;
                
            case "3":                       
                carga_plan_dinamico(plan_ABOG);
                pos_lista_plan.disabled = false;                   
                break;
            case "4":                     
                carga_plan_dinamico(plan_MEDICA_RIO_IV);
                pos_lista_plan.disabled = false;                
                break;
            case "5":                       
                carga_plan_dinamico(plan_DASUTEN);
                pos_lista_plan.disabled = false;                 
                break;
            case "6":                       
                carga_plan_dinamico(plan_MEDICAMENTO_PRIMER_NIVEL);
                pos_lista_plan.disabled = false;                  
                break;
            case "7":                       
                carga_plan_dinamico(plan_EXPERIENCIA_ART);
                pos_lista_plan.disabled = false;                 
                break;
            case "8":                       
                carga_plan_dinamico(plan_EXPERTA_ART);
                pos_lista_plan.disabled = false;
                break;
            case "9":                       
                carga_plan_dinamico(plan_GALENO_ART);
                pos_lista_plan.disabled = false;                  
                break;
            case "10":                       
                    carga_plan_dinamico(plan_LA_SEGUNDA_ART);
                    pos_lista_plan.disabled = false;                   
                break;
            case "11":                       
                    carga_plan_dinamico(plan_LIBERTY_ART);
                    pos_lista_plan.disabled = false;                  
                break;
            case "12":                       
                    carga_plan_dinamico(plan_LIDERAR_ART);
                    pos_lista_plan.disabled = false;                   
                break;
            case "13":                       
                    carga_plan_dinamico(plan_PLUS_ART);
                    pos_lista_plan.disabled = false;              
                break;
            case "14":                       
                    carga_plan_dinamico(plan_OMINT_ART);
                    pos_lista_plan.disabled = false;                  
                break;
            case "15":                       
                    carga_plan_dinamico(plan_JERARQUICOS_SALUD);
                    pos_lista_plan.disabled = false;             
                break;
            case "16":                       
                    carga_plan_dinamico(plan_OSAPM);
                    pos_lista_plan.disabled = false;                    
                break;
            case "17":                       
                    carga_plan_dinamico(plan_OSDEPYM);
                    pos_lista_plan.disabled = false;                 
                break;
            case "18":                       
                    carga_plan_dinamico(plan_OSBA);
                    pos_lista_plan.disabled = false;
                break;
            case "19":                       
                    carga_plan_dinamico(plan_OSDIPP);
                    pos_lista_plan.disabled = false;        
                break;
            case "20":                       
                    carga_plan_dinamico(plan_OS_PERS_DE_FCIAS);
                    pos_lista_plan.disabled = false;             
                break;
            case "21":                       
                    carga_plan_dinamico(plan_OS_S_FEDERACIÓN_DE_LA_CARNE);
                    pos_lista_plan.disabled = false;          
                break;
            case "22":                       
                    carga_plan_dinamico(plan_ORG_ROCA);
                    pos_lista_plan.disabled = false;            
                break;
            case "23":                       
                    carga_plan_dinamico(plan_OSIAD_ACEITEROS);
                    pos_lista_plan.disabled = false;       
                break;
            case "24":                       
                    carga_plan_dinamico(plan_OSPIC_CAUCHO);
                    pos_lista_plan.disabled = false;                
                break;
            case "25":                       
                    carga_plan_dinamico(plan_OSPIT_TEXTILES);
                    pos_lista_plan.disabled = false;               
                break;
            case "26":                       
                    carga_plan_dinamico(plan_OSPIP_PLÁSTICOS);
                    pos_lista_plan.disabled = false;               
                break;
            case "27":                       
                    carga_plan_dinamico(plan_OSMATA);
                    pos_lista_plan.disabled = false;                
                break;
            case "28":                       
                    carga_plan_dinamico(plan_OSFATLYF);
                    pos_lista_plan.disabled = false;                
                break;
            case "29":                       
                    carga_plan_dinamico(plan_OSFE);
                    pos_lista_plan.disabled = false;              
                break;
            case "30":                       
                    carga_plan_dinamico(plan_PODER_JUDICIAL);
                    pos_lista_plan.disabled = false;                
                break;
            case "31":                       
                    carga_plan_dinamico(plan_POLICIA_FEDERAL_MES_ACTUAL);
                    pos_lista_plan.disabled = false;             
                break;
            case "32":                       
                    carga_plan_dinamico(plan_POLICÍA_FEDERAL_MESES_ANTERIORES);
                    pos_lista_plan.disabled = false;             
                break;
            case "33":                       
                    carga_plan_dinamico(plan_POLICIA_FEDERAL_TRAT_ESPECIALES);
                    pos_lista_plan.disabled = false;                 
                break;
            case "34":                       
                    carga_plan_dinamico(plan_PROVINCIA_ART);
                    pos_lista_plan.disabled = false;                 
                break;
            case "35":                       
                    carga_plan_dinamico(plan_RECETARIO_SOLIDARIO);
                    pos_lista_plan.disabled = false;            
                break;
            case "36":                       
                    carga_plan_dinamico(plan_SIPSSA_PREPAGO);
                    pos_lista_plan.disabled = false;           
                break;
            case "37":                       
                    carga_plan_dinamico(plan_SIPSSA_OSPOCE);
                    pos_lista_plan.disabled = false;               
                break;
            case "38":                       
                    carga_plan_dinamico(plan_SIPSSA_OSPOCE_APEX);
                    pos_lista_plan.disabled = false;                 
                break;
            case "39":                       
                    carga_plan_dinamico(plan_SIPSSA_OSCEP);
                    pos_lista_plan.disabled = false;               
                break;
            case "40":                       
                    carga_plan_dinamico(plan_SIPSSA_ASSP);
                    pos_lista_plan.disabled = false;             
            break;
            case "41": 
                    carga_plan_dinamico(plan_SIPSSA_OSIM);
                    pos_lista_plan.disabled = false;                
                break;
            case "42":                       
                    carga_plan_dinamico(plan_SIPSSA_APM);
                    pos_lista_plan.disabled = false;               
                break;
            case "43":                       
                    carga_plan_dinamico(plan_SIPSSA_TA);
                    pos_lista_plan.disabled = false;                 
                break;
            case "44":                       
                    carga_plan_dinamico(plan_SIPSSA_PLAN_37_EMPLEADOS);
                    pos_lista_plan.disabled = false;                  
                break;
            case "45":                       
                    carga_plan_dinamico(plan_SANCOR_SEGUROS_INTEGROS);
                    pos_lista_plan.disabled = false;                
                break;
            case "46":                       
                    carga_plan_dinamico(plan_SERVIRED);
                    pos_lista_plan.disabled = false;               
                break;
            case "47":                       
                    carga_plan_dinamico(plan_SWISS_MEDICAL_VALIDADAS);
                    pos_lista_plan.disabled = false;                
                break;
            case "48":                       
                    carga_plan_dinamico(plan_SWISS_MEDICAL_NO_VALIDADAS);
                    pos_lista_plan.disabled = false;                 
                break;
            case "49":                       
                    carga_plan_dinamico(plan_SWISS_MEDICAL_ART);
                    pos_lista_plan.disabled = false;                 
                break;
            case "50":                       
                    carga_plan_dinamico(plan_UNIÓN_PERSONAL);
                    pos_lista_plan.disabled = false;               
                break;
            case "51":                       
                    carga_plan_dinamico(plan_VICTORIA_ART);
                    pos_lista_plan.disabled = false;             
                break;
                default:
                    break;
        }  
    }
}
//console.log(value_id_select)

//BORRA LAS FILAS
deleteRow = (btn) => {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    boton.disabled = false;
}

//OCULTA LOS BOTONES CUANDO SE VA A IMPRIMIR
ocultar = () =>{
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    }
    window.print();
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "inline-block";
    }
}

//FUNCION QUE CARGA LOS CODIGOS DE LOS PLANES EN LA PRIMER COLUMNA

carga_cod_planes = () => {
    let codigo = document.getElementById("codigo_plan" + bandera);
    let id_select = document.getElementById("select_os"+bandera).value;
    let codigo_plan = document.getElementById("id_planes_lista" + bandera);
    var selected = codigo_plan.options[codigo_plan.selectedIndex].text;

    //AGREGAR IF SEGUN EL SELECT DE LA OS Y EL PLAN Q ELEIGIO

        switch (id_select) {
            case "1":
                codigo.value = "115"
                codigo.disabled = true;
                break;
            case "2":
                codigo.value = "22"
                codigo.disabled = true;
                break;
            case "3":
                if (selected == "AMB.") {
                    codigo.value = "18"
                }
                codigo.disabled = true;
                if (selected == "PMI. 100%") {
                    codigo.value = "218"
                }
                codigo.disabled = true;
                if (selected == "ESPECIALES") {
                    codigo.value = "518"
                }
                codigo.disabled = true;
                break;
            case "4":
                codigo.value = "21"
                codigo.disabled = true;
                break;
            case "5":
                codigo.value = "8"
                codigo.disabled = true;
                break;
            case "6":
                codigo.value = "2900"
                codigo.disabled = true;
                break;
            case "7":
                codigo.value = "153"
                codigo.disabled = true;
                break;
            case "8":
                codigo.value = "137"
                codigo.disabled = true;
                break;   
            case "9":
                codigo.value = "125"
                codigo.disabled = true;
                break;  
            case "10":
                codigo.value = "2550"
                codigo.disabled = true;
                break;
            case "11":
                codigo.value = "126"
                codigo.disabled = true;
                break;
            case "12":
                codigo.value = "5800"
                codigo.disabled = true;
                break;
            case "13":
                codigo.value = "122"
                codigo.disabled = true;
                break;
            case "14":
                codigo.value = "8702"
                codigo.disabled = true;
                break;  
            case "15":
                codigo.value = "301"
                codigo.disabled = true;
                break; 
            case "16":
                codigo.value = "8501"
                codigo.disabled = true;
                break; 
            case "17":
                codigo.value = "5408"
                codigo.disabled = true;
                break; 
            case "18":
                codigo.value = "307"
                codigo.disabled = true;
                break; 
            case "19":
                codigo.value = "2"
                codigo.disabled = true;
                break; 
            case "20":
                codigo.value = "71"
                codigo.disabled = true;
                break; 
            case "21":
                codigo.value = "898"
                codigo.disabled = true;
                break; 
            case "22":
                codigo.value = "76"
                codigo.disabled = true;
                break; 
            case "23":
                codigo.value = "69"
                codigo.disabled = true;
                break; 
            case "24":
                codigo.value = "420"
                codigo.disabled = true;
                break; 
            case "25":
                codigo.value = "758"
                codigo.disabled = true;
                break; 
            case "26":
                codigo.value = "6800"
                codigo.disabled = true;
                break; 
            case "27":
                codigo.value = "300"
                codigo.disabled = true;
                break;     
            case "28":
                codigo.value = "2673"
                codigo.disabled = true;
                break; 
            case "29":
                codigo.value = "2000"
                codigo.disabled = true;
                break; 
            case "30":
                codigo.value = "8500"
                codigo.disabled = true;
                break; 
            case "31":
                codigo.value = "81"
                codigo.disabled = true;
                break;
            case "32":
                codigo.value = "481"
                codigo.disabled = true;
                break; 
            case "33":
                codigo.value = "781"
                codigo.disabled = true;
                break; 
            case "34":
                codigo.value = "208"
                codigo.disabled = true;
                break; 
            case "35":
                codigo.value = "1000"
                codigo.disabled = true;
                break; 
            case "36":
                codigo.value = "7100"
                codigo.disabled = true;
                break; 
            case "37":
                codigo.value = "7200"
                codigo.disabled = true;
                break; 
            case "38":
                codigo.value = "7300"
                codigo.disabled = true;
                break; 
            case "39":
                codigo.value = "7400"
                codigo.disabled = true;
                break; 
            case "40":
                codigo.value = "7500"
                codigo.disabled = true;
                break; 
            case "41":
                codigo.value = "7600"
                codigo.disabled = true;
                break; 
            case "42":
                codigo.value = "7700"
                codigo.disabled = true;
                break; 
            case "43":
                codigo.value = "7800"
                codigo.disabled = true;
                break; 
            case "44":
                codigo.value = "8400"
                codigo.disabled = true;
                break;      
            case "45":
                codigo.value = "5000"
                codigo.disabled = true;
                break;  
            case "46":
                codigo.value = "720"
                codigo.disabled = true;
                break; 
            case "47":
                codigo.value = "308"
                codigo.disabled = true;
                break;  
            case "48":
                codigo.value = "1308"
                codigo.disabled = true;
                break;  
            case "49":
                codigo.value = "1308"
                codigo.disabled = true;
                break;  
            case "50":
                codigo.value = "8001"
                codigo.disabled = true;
                break;  
            case "51":
                codigo.value = "5500"
                codigo.disabled = true;
                break;
            default:
                break;
        }
    codigo_plan.disabled = true;
}