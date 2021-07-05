//1° Validación Solo Números

//Expresion Regular Solo Números
var ExpRegSoloNumeros="^[0-9]+$";

var NumeroValido="12346789";//Cadena Texto de Solo Números Valida
var NumeroInvalido=" 12346789";//Cadena Texto de Solo Números Invalida

//Evaluación de Cadena Valida de Solo Números 
if(NumeroValido.match(ExpRegSoloNumeros)!=null)
    console.log("Numero Valido");

//Evaluación de Cadena Invalida de Solo Números     
if(NumeroInvalido.match(ExpRegSoloNumeros)==null)
    console.log("Numero Invalido");


//2° Validación Solo Letras

//Expresion Regular Solo Letras
var ExpRegSoloLetras="^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";

var SoloLetrasValido="ABCDáéíó";//Cadena de Solo Letras Valida
var SoloLetrasInvalido=" ABCDáéíó";//Cadena de Solo Letras Invalida

//Evaluación de Cadena Valida de Solo Letras 
if(SoloLetrasValido.match(ExpRegSoloLetras)!=null)
    console.log("Letras Válido");

//Evaluación de Cadena Invalida de Solo Letras     
if(SoloLetrasInvalido.match(ExpRegSoloLetras)==null)
    console.log("Letras Invalido");


//3° Validación Letras con Espacio

//Expresion Regular Letras con Espacio
var ExpRegLetrasEspacio="^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";

var LetrasEspacioValido=" ABCDáéíó";//Cadena de Solo Letras Valida
var LetrasEspacioInvalido=" 1ABCDáéíó";//Cadena de Solo Letras Invalida

//Evaluación de Cadena Valida de Letras con Espacio 
if(LetrasEspacioValido.match(ExpRegLetrasEspacio)!=null)
    console.log("Letras con Espacio Válido");

//Evaluación de Cadena Invalida de Letras con Espacio     
if(LetrasEspacioInvalido.match(ExpRegLetrasEspacio)==null)
    console.log("Letras con Espacio Invalido");


//4° Validación Nombres y Apellidos

//Expresión Regular Nombres y Apellidos
var ExpRegNomApe="^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";

var NomApeValido="Williams Morales";//Cadena de Nombres y Apellidos
var NomApeinvalido="10 Morales";//Cadena de Nombres y Apellidos

//Evaluación de Cadena Valida de Nombres y Apellidos
if(NomApeValido.match(ExpRegNomApe)!=null)
    console.log("Nombres y Apellidos Válido");

//Evaluación de Cadena Invalida de Nombres y Apellidos   
if(NomApeinvalido.match(ExpRegNomApe)==null)
    console.log("Nombres y Apellidos Invalido");  


//5° Validación Precio con 2 decimales

//Expresión Regular Precio con 2 decimales
var ExpRegPrecio2Decimales="^[0-9]+[.,]{1,1}\[0]{2,2}$";

var Precio2DecimalesValido="10,00";//Cadena de Precio con 2 decimales
var Precio2Decimalesinvalido="10";//Cadena de Precio con 2 decimales

//Evaluación de Cadena Valida de Precio con 2 decimales 
if(Precio2DecimalesValido.match(ExpRegMonto2Decimales)!=null)
    console.log("Precio 2 Decimales Válido");

//Evaluación de Cadena Invalida de Precio con 2 decimales    
if(Precio2Decimalesinvalido.match(ExpRegPrecio2Decimales)==null)
    console.log("Precio 2 Decimales Invalido");


//6° Validación Números Decimales

//Expresión Regular Número Decimal
var ExpRegNumDec=/^\d*\.\d+$/;

var NumDecValido="10.2225";//Cadena de Número Decimal
var NumDecinvalido="10";//Cadena de Número Decimal

//Evaluación de Cadena Valida de Número Decimal
if(NumDecValido.match(ExpRegNumDec)!=null)
    console.log("Número Decimal Válido");

//Evaluación de Cadena Invalida de Número Decimal  
if(NumDecinvalido.match(ExpRegNumDec)==null)
    console.log("Número Decimal Invalido");    

//7° Validación Números Enteros Positivos y Negativos

//Expresión Regular Número Entero
var ExpRegNumEntero=/^-?\d*(\.\d+)?$/;

var NumEnteroValido="-10";//Cadena de Número Entero
var NumEnteroinvalido="+10";//Cadena de Número Entero

//Evaluación de Cadena Valida de Número Entero
if(NumEnteroValido.match(ExpRegNumEntero)!=null)
    console.log("Número Entero Válido");

//Evaluación de Cadena Invalida de Número Entero  
if(NumEnteroinvalido.match(ExpRegNumEntero)==null)
    console.log("Número Entero Invalido");  


//8° Validación Separador de Miles y Decimales

//Expresión Regular Separador de Miles y Decimales
var ExpRegSepMiles=/^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})*(\.\d+)?$/;

var SepMilesValida="1,105,586.000";//Cadena de Separador de Miles y Decimales
var SepMilesinvalida="100000";//Cadena de Separador de Miles y Decimales

//Evaluación de Cadena Valida de Separador de Miles y Decimales
if(SepMilesValida.match(ExpRegSepMiles)!=null)
    console.log("Separador de Miles y Decimales Válida");

//Evaluación de Cadena Invalida de Separador de Miles y Decimales  
if(SepMilesinvalida.match(ExpRegSepMiles)==null)
    console.log("Separador de Miles y Decimales Invalida");    

//9° Validación Fecha DD/MM/YYYY

//Expresión Regular Fecha dd/mm/yyyy
var ExpRegFecha=/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;

var FechaValida="28/02/2021";//Cadena de Fecha dd/mm/yyyy
var Fechainvalida="29/02/2021";//Cadena de Fecha dd/mm/yyyy

//Evaluación de Cadena Valida de Fecha dd/mm/yyyy
if(FechaValida.match(ExpRegFecha)!=null)
    console.log("Facha Válida");

//Evaluación de Cadena Invalida de Fecha dd/mm/yyyy  
if(Fechainvalida.match(ExpRegFecha)==null)
    console.log("Fecha Invalida");  

//10° Validación Horario 12 hrs.

//Expresión Regular Horario 12 hrs.
var ExpRegHora12Hrs=/((1[0-2]|0?[1-2]):([0-5][0-9]) ?([AaPp][Mm]))/;

var Hora12HrsValida="12:00 PM";//Cadena de Horario 12 hrs.
var Hora12Hrsinvalida="13:00 PM";//Cadena de Horario 12 hrs.

//Evaluación de Cadena Valida de Horario 12 hrs.
if(Hora12HrsValida.match(ExpRegHora12Hrs)!=null)
    console.log("Horario 12 hrs. Válida");

//Evaluación de Cadena Invalida de Horario 12 hrs.  
if(Hora12Hrsinvalida.match(ExpRegHora12Hrs)==null)
    console.log("Horario 12 hrs. Invalida");

//11° Validación Horario 24 hrs.

//Expresión Regular Horario 24 hrs.
var ExpRegHora24Hrs=/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

var Hora24HrsValida="23:59";//Cadena de Horario 24 hrs.
var Hora24Hrsinvalida="33:00";//Cadena de Horario 24 hrs.

//Evaluación de Cadena Valida de Horario 24 hrs.
if(Hora24HrsValida.match(ExpRegHora24Hrs)!=null)
    console.log("Horario 24 hrs. Válida");

//Evaluación de Cadena Invalida de Horario 24 hrs.  
if(Hora24Hrsinvalida.match(ExpRegHora24Hrs)==null)
    console.log("Horario 24 hrs. Invalida");

//12° Validación Contraseña Fuerte

//Expresión Regular Contraseña Fuerte
var ExpRegPassFuerte=/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

var PassFuerteValida="wMH432595@";//Cadena de Contraseña Fuerte
var PassFuerteinvalida="wMH5@";//Cadena de Contraseña Fuerte

//Evaluación de Cadena Valida de Contraseña Fuerte
if(PassFuerteValida.match(ExpRegPassFuerte)!=null)
    console.log("Contraseña Fuerte Válida");

//Evaluación de Cadena Invalida de Contraseña Fuerte  
if(PassFuerteinvalida.match(ExpRegPassFuerte)==null)
    console.log("Contraseña Fuerte Invalida");

//13° Validación Nombres de Usuario

//Expresión Regular Nombres de Usuario
var ExpRegNomUsuario=/^[a-z0-9_-]{3,16}$/;

var NomUsuarioValida="pedro-85";//Cadena de Nombres de Usuario
var NomUsuarioinvalida="pedro.85";//Cadena de Nombres de Usuario

//Evaluación de Cadena Valida de Nombres de Usuario
if(NomUsuarioValida.match(ExpRegNomUsuario)!=null)
    console.log("Nombres de Usuario Válida");

//Evaluación de Cadena Invalida de Nombres de Usuario  
if(NomUsuarioinvalida.match(ExpRegNomUsuario)==null)
    console.log("Nombres de Usuario Invalida");

//14° Validación Email

//Expresión Regular Email
var ExpRegEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

var EmailValido="contacto.estilow3b@gmail.com";//Cadena de Email
var EmailInvalido="contacto.estilow3b@gmail,com";//Cadena de Email

//Evaluación de Cadena Valida de Email 
if(EmailValido.match(ExpRegEmail)!=null)
    console.log("Email Válido");

//Evaluación de Cadena Invalida de Email    
if(EmailInvalido.match(ExpRegEmail)==null)
    console.log("Email Invalido");

//15° Validación URL

//Expresión Regular URL
var ExpRegURL=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var URLValido="https://mantis.estilow3b.com/login_page.php";//Cadena de URL
var URLinvalido="http://www.estilow3b,com";//Cadena de URL

//Evaluación de Cadena Valida de URL 
if(URLValido.match(ExpRegURL)!=null)
    console.log("URL Válido");

//Evaluación de Cadena Invalida de URL    
if(URLinvalido.match(ExpRegURL)==null)
    console.log("URL Invalido");


//16° Validación IP 4

//Expresión Regular IP 4
var ExpRegIP4=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

var IP4Valido="73.60.124.136";//Cadena de IP 4
var IP4invalido="256.255.184.136";//Cadena de IP 4

//Evaluación de Cadena Valida de IP 4
if(IP4Valido.match(ExpRegIP4)!=null)
    console.log("IP 4 Válido");

//Evaluación de Cadena Invalida de IP 4  
if(IP4invalido.match(ExpRegIP4)==null)
    console.log("IP 4 Invalido");    


//17° Validación Color Hexadecimal

//Expresión Regular Color Hexadecimal
var ExpRegColHexa=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/;

var ColHexaValido="#85a8e5";//Cadena de Color Hexadecimal
var ColHexainvalido="#h775ba";//Cadena de Color Hexadecimal

//Evaluación de Cadena Valida de Color Hexadecimal
if(ColHexaValido.match(ExpRegColHexa)!=null)
    console.log("Color Hexadecimal Válido");

//Evaluación de Cadena Invalida de Color Hexadecimal  
if(ColHexainvalido.match(ExpRegColHexa)==null)
    console.log("Color Hexadecimal Invalido");    
