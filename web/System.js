System = function(){}

/**
*	Incluir una libreria javascript
*
**/
System.Include = function(src)
{
	var NodeScript = document.createElement("script")	
	NodeScript.setAttribute("src",src)
	NodeScript.setAttribute("type","text/javascript")
	
	var HeadTag = document.getElementsByTagName("head")
	if(HeadTag.length > 0)	
		HeadTag[0].appendChild(NodeScript)
	else
		alert("El tag \"Head\" de la página web no esta declarada o no existe")		
}

/**
*	Ir a una ubicación indicada
**/
System.getURL = function(url,question)
{    
    if(typeof question != "undefined" && question != "")
        if(!(option = confirm(question)))
            return;        
    document.location.href = url;
}

/**
*	Valido que la dirección de correo sea una dirección válida
**/
System.ValidEMail = function(correo)
{
    var Correcto = true
    var Mask = /[^\w^@^\.^-]+/gi
    
    if (Mask.test(correo)){
        Correcto = false
    }else
    {
        //Mask = /(^\w+)(@{1})([\w\.-]+$)/i
        Mask = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        Correcto = Mask.test(correo)            
    }
    if (!Correcto)
        alert("La dirección de correo no es válida")
    
    return Correcto
}


System.ValidEMail2 = function(correo)
{
    var rejectedDomain=new Array()
    var index = 0;
    //rejectedDomain[index++] = "hotmail"
    rejectedDomain[index++] = "rocketmail"
    rejectedDomain[index++] = "yahoo"
    rejectedDomain[index++] = "zdnetmail"

    var rejected = false
    var testresults = true
    //var str=form.txtcorreo.value
    var str=correo.value
    var filter=/^.+@.+\..{2,3}$/
    if (filter.test(str)){
        var tempstring = str.split("@")
        tempstring = tempstring[1].split(".")
        for (i=0; i<rejectedDomain.length; i++) {
            if (tempstring[0]==rejectedDomain[i])
            rejected = true
        }
        if (rejected) {
            //var message = "Please input a more official email address!\n"
            var message = "Por favor introduzca una direccion de correo valida!\n"
            //message += "The following addresses are not allowed:\n"
            message = "Las siguientes direcciones no son permitidas:\n"
            for (i=0; i<rejectedDomain.length; i++) {
                //message += "\t" + rejectedDomain[i] + "\n"
                message += rejectedDomain[i] + "\n"
            }
            //System.validatePrompt(form.email, message)
            System.validatePrompt(correo, message)
            testresults = false
        }
    } else {
        //message = "Please input a complete and valid email address!"
        message = "Por favor introduzca una direccion de email completa y valida!"
        //System.validatePrompt(form.email, message)
        System.validatePrompt(correo, message)
        testresults = false
    }
    //alert(testresults)
    return (testresults)
}

System.validatePrompt = function(Ctrl, PromptStr)
{
    alert(PromptStr);
    Ctrl.focus();
    return;
}

System.ValidEMail3 = function(correo,message)
{
    var rejectedDomain=new Array()
    var index = 0;
    //rejectedDomain[index++] = "hotmail"
    rejectedDomain[index++] = "rocketmail"
    rejectedDomain[index++] = "yahoo"
    rejectedDomain[index++] = "zdnetmail"

    var rejected = false
    var testresults = true
    //var str=form.txtcorreo.value
    var str=correo.value
    var filter=/^.+@.+\..{2,3}$/
    if (filter.test(str)){
        var tempstring = str.split("@")
        tempstring = tempstring[1].split(".")
        for (i=0; i<rejectedDomain.length; i++) {
            if (tempstring[0]==rejectedDomain[i])
            rejected = true
        }
        if (rejected) {
            //var message = "Please input a more official email address!\n"
            message.msj = "Por favor introduzca una direccion de correo valida!\n"
            //message += "The following addresses are not allowed:\n"
            message.msj = "Las siguientes direcciones no son permitidas:\n"
            for (i=0; i<rejectedDomain.length; i++) {
                //message += "\t" + rejectedDomain[i] + "\n"
                message.msj += rejectedDomain[i] + "\n"
            }
            //System.validatePrompt(form.email, message)
            //System.validatePrompt(correo, message)
            testresults = false
        }
    } else {
        //message = "Please input a complete and valid email address!"
        message.msj = "Por favor introduzca una direccion de email completa y valida!"
        //System.validatePrompt(form.email, message)
        //System.validatePrompt(correo, message)
        testresults = false
    }
    //alert(testresults)
    //alert(message);
    //alert(message.msj);
    return (testresults)
}

System.ValidEMail4 = function(correo,message)
{
    //if (typeof(message)=="undefined")
    //alert(typeof(message))
    //alert(arguments)
    //alert(arguments.length)
    var rejectedDomain=new Array()
    var index = 0;
    //rejectedDomain[index++] = "hotmail"
    rejectedDomain[index++] = "rocketmail"
    //rejectedDomain[index++] = "yahoo"
    rejectedDomain[index++] = "zdnetmail"

    var rejected = false
    var testresults = true
    //var str=form.txtcorreo.value
    var str=correo.value
    var filter=/^.+@.+\..{2,3}$/

    if(arguments.length==1){
        if (filter.test(str)){
            var tempstring = str.split("@")
            tempstring = tempstring[1].split(".")
            for (i=0; i<rejectedDomain.length; i++) {
                if (tempstring[0]==rejectedDomain[i])
                rejected = true
            }
            if (rejected) {
                //var message = "Please input a more official email address!\n"
                var message = "Por favor introduzca una direccion de correo valida!\n"
                //message += "The following addresses are not allowed:\n"
                message = "Las siguientes direcciones no son permitidas:\n"
                for (i=0; i<rejectedDomain.length; i++) {
                    //message += "\t" + rejectedDomain[i] + "\n"
                    message += rejectedDomain[i] + "\n"
                }
                //System.validatePrompt(form.email, message)
                System.validatePrompt(correo, message)
                testresults = false
            }
        } else {
            //message = "Please input a complete and valid email address!"
            message = "Por favor introduzca una direccion de email completa y valida!"
            //System.validatePrompt(form.email, message)
            System.validatePrompt(correo, message)
            testresults = false
        }
        //alert(testresults)
    }else{
        if(arguments.length==2){
            if (filter.test(str)){
                var tempstring = str.split("@")
                tempstring = tempstring[1].split(".")
                for (i=0; i<rejectedDomain.length; i++) {
                    if (tempstring[0]==rejectedDomain[i])
                    rejected = true
                }
                if (rejected) {
                    //var message = "Please input a more official email address!\n"
                    message.msj = "Por favor introduzca una direccion de correo valida!\n"
                    //message += "The following addresses are not allowed:\n"
                    message.msj = "Las siguientes direcciones no son permitidas:\n"
                    for (i=0; i<rejectedDomain.length; i++) {
                        //message += "\t" + rejectedDomain[i] + "\n"
                        message.msj += rejectedDomain[i] + "\n"
                    }
                    //System.validatePrompt(form.email, message)
                    //System.validatePrompt(correo, message)
                    testresults = false
                }
            } else {
                //message = "Please input a complete and valid email address!"
                message.msj = "Por favor introduzca una direccion de email completa y valida!"
                //System.validatePrompt(form.email, message)
                //System.validatePrompt(correo, message)
                testresults = false
            }
            //alert(testresults)
            //alert(message);
            //alert(message.msj);
        }
    }
    return (testresults)
}

/**
*	Obtiene un identificador de pagina
*
**/
System.GetPageId = function()
{
	var id = window.location.href.substr(window.location.href.lastIndexOf("/")+1)
	id = id.replace(/\./g, "")
	id = id.replace(/\=/g, "")
	id = id.replace(/\?/g, "")
	id = id.replace(/\&/g, "")
	return id
}

/**
*	Objeto para el manejo del historico de la página
*
**/
System.History = function(){}

/**
*	Ir a una página del historial del sitio
**/
System.History.Go = function(pos)
{
	window.history.go(pos);
	return false;
}

/**
*	Ir a tras
*
**/
System.History.Back = function()
{
	window.history.back()	
}

/**
*	Ir Hacia adelante
*
**/
System.History.Forward = function()
{
	window.history.forward()
}

/**
*	Messagebox
**/
System.MessageBox = function(){}

System.MessageBox.Confirn = 32;
System.MessageBox.Alert = 48;
System.MessageBox.OK = true;
System.MessageBox.Cancel = false;

System.MessageBox.Show = function(eMessageText, nDialogBoxType)
{	
	var result;
	switch(nDialogBoxType)
	{	
		case  System.MessageBox.Alert:
			alert(eMessageText);						
			result = System.MessageBox.OK;			
			break
			
		case System.MessageBox.Confirn:
			result = confirm(eMessageText);				
			break;
				
		default:
			result = System.MessageBox.Cancel;
	}		
	return result;
}

System.MessageBox.ShowError = function(e)
{
	var Msj = "Se a un error en tiempo de ejecución:\n\n"
	Msj += "Error Nº " + (e.number & 0xFFFF) +"\n"
	Msj += "Name: " + e.name +"\n"
	Msj += "Mensaje: " +  (e.message != null ? e.message : "Error inesperado")+"\n"
	Msj += "Descripción: "+ (e.description != null ? e.description : "Error inesperado")
	//alert(Msj)
}

/**
*	Clase para el manejo de ventanas 
*
**/
System.Window = function()
{
	this.object	= null
	this.Title = "" //Titulo de la ventana
	this.Left = 0; //Nos dice la distancia en pixels desde el lado izquierdo de la pantalla a la que se debe colocar la ventana.
	this.Top = 0; //Nos dice la distancia en pixels desde el lado superior de la pantalla a la que se debe colocar la ventana.
	this.URL = "";		
    this.Width = 800  //Nos dice el ancho de la ventana en pixels.
    this.Height = 600 //Nos dice el alto de la ventana en pixels.	
    this.Toolbar = false //Nos dice si la ventana tendrá barra de herramientas (true) o no la tendrá (false).
    this.Location = true //Nos dice si la ventana tendrá campo de localización o no.
    this.Directories = false //Nos dice si la nueva ventana tendrá botones de dirección o no.
		
    this.Status = false //Nos dice si la nueva ventana tendrá barra de estado o no.
    this.Menubar = false //Nos dice si la nueva ventana tendrá barra de menús o no.
    this.Scrollbars = false //Nos dice si la nueva ventana tendrá barras de desplazamiento o no.
    this.Resizable = false //Nos dice si la nueva ventana podrá ser cambiada de tamaño (con el ratón) o no.
	this.AutoCenter = true //Indica si la ventana se muestra centrada
}

/**
*	Muestro la ventana
*
**/
//System.Window.Show = function()
System.Window.prototype.Show = function()
{
    this.Toolbar = (this.Toolbar==true)?'yes':'no';
    this.Location = (this.Location==true)?'yes':'no';
    this.Directories = (this.Directories==true)?'yes':'no';
    this.Status = (this.Status==true)?'yes':'no';
    this.Menubar = (this.Menubar==true)?'yes':'no';
    this.Scrollbars = (this.Scrollbars==true)?'yes':'no';
    this.Resizable = (this.Resizable==true)?'yes':'no';

	try
	{			
		this.ValidPosXY()
        var Cad = "left=" + this.Left + ", " +
        "top=" + this.Top + ", " +
        "width=" + this.Width + ", " +
        "height=" + this.Height + ", " +
        "toolbar=" + this.Toolbar + ", " +
        "location=" + this.Location + ", " +
        "directories=" + this.Directories + ", " +
        "status=" + this.Status + ", " +
        "menubar=" + this.Menubar + ", " +
        "scrollbars=" + this.Scrollbars + ", " +
        "resizable=" + this.Resizable    
/*        
		var Cad = "left=" + this.Left + ", " +
		"top=" + this.Top + ", " +
	    "width=" + this.Width + ", " +
	    "height=" + this.Height + ", " +
		"toolbar=" + this.Toolbar.toAfirm() + ", " +
	    "location=" + this.Location.toAfirm() + ", " +
	    "directories=" + this.Directories.toAfirm() + ", " +
	    "status=" + this.Status.toAfirm() + ", " +
	    "menubar=" + this.Menubar.toAfirm() + ", " +
    	"scrollbars=" + this.Scrollbars.toAfirm() + ", " +
	    "resizable=" + this.Resizable.toAfirm()	
*/        
        //document.write(this.URL)    
        //document.write(this.Title)    
        //alert(Cad)
		window.open(this.URL, this.Title, Cad)
	}
	catch(e)
	{
		System.MessageBox.ShowError(e)
	}	
}

/**
*	Valido las posiciones X y Y de la ventana
*
**/
//System.Window.ValidPosXY = function()
System.Window.prototype.ValidPosXY = function()
{
	if(this.AutoCenter)
	{
		this.Left = (screen.width - this.Width / 2);
		this.Top = (screen.height - this.Height / 2);		
	}
}

/**
*	Cierro la ventana
*
**/
System.Window.prototype.Close = function()
//System.Window.Close = function()
{
	this.object.close()
}

/**
*	Clase para el manejo de browser
*
**/
System.Browser = function(){}

System.Browser.undefined = 0;
System.Browser.Opera = 1;
System.Browser.FireFox = 2;
System.Browser.Netscape = 3;
System.Browser.MSIE = 4;
System.Browser.MSIEMac = 5;
System.Browser.Dom = 6;
System.Browser.Safari = 7;

/**
*	Detecto el browser
**/
System.Browser.Detect = function ()
{	
	var brow = System.Browser.undefined
	if(window.showHelp)
	{	brow = System.Browser.MSIE;//browser = internet explorer
		if(!window.attachEvent) 
			brow = System.Browser.MSIEMac//browser = internet explorer para mac
	}	

	if(document.createElementNS) 
		brow = System.Browser.Dom;//browser = dom
	
	if(navigator.userAgent.indexOf("afari") > -1)
		brow = System.Browser.Safari;//browser = safari*/
	
	if(window.opera || navigator.userAgent.indexOf("pera") > -1) 
		brow = System.Browser.Opera;//browser = opera
	else
	{	if((window) && (window.netscape) && (window.netscape.security))
			brow = navigator.userAgent.indexOf("irefox") > -1 ? System.Browser.FireFox : System.Browser.Netscape			
	}	
	return brow;
}

/**
*    Funcion replace renplaza un cadena dentro de otra
**/
System.replace = function(text,s1,s2)
{
    return text.split(s1).join(s2);
}

/**
*    Funcion trim que borra quita los espacios en blanco al principio y al final de la cadena dada
**/

/*
System.trim2 = function(cadena)
{
    for(i=0; i<cadena.length; )
    {
        if(cadena.charAt(i)==" ")
            cadena=cadena.substring(i+1, cadena.length);
        else
            break;
    }

    for(i=cadena.length-1; i>=0; i=cadena.length-1)
    {
        if(cadena.charAt(i)==" ")
            cadena=cadena.substring(0,i);
        else
            break;
    }
    
    return cadena;
}
*/

/**
*    Funcion trim que borra quita los espacios en blanco ala izquierda de la cadena dada
**/
//function System.LTrim(str) { 
System.LTrim = function(str) {
    for (var k=0; k<str.length && str.charAt(k)<=" " ; k++) ;
        return str.substring(k,str.length);
}

/**
*    Funcion trim que borra quita los espacios en blanco ala derecha de la cadena dada
**/
//function System.RTrim(str) {
System.RTrim = function(str) {
    for (var j=str.length-1; j>=0 && str.charAt(j)<=" " ; j--) ;
        return str.substring(0,j+1);
}

/**
*    Funcion trim que borra quita los espacios en blanco al principio y al final de la cadena dada
**/
//function System.Trim(str) {
System.Trim = function(str) {
        return System.LTrim(System.RTrim(str));
}

/**
*    Funcion para agregar comas despues de cada 3 digitos
**/
System.addCommas = function(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

/**
*    Funcion para darle el formato currency a un numero
**/
System.formatCurrency = function(num) {
    num = num.toString().replace(/$|,/g,'');
    if(isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
        num = num.substring(0,num.length-(4*i+3))+','+
    num.substring(num.length-(4*i+3));
    return (((sign)?'':'-') + '$' + num + '.' + cents);
}

/**
*	Modifico el contenido HTML que tiene una capa
**/
System.updateMsj = function(mydiv , msj)
{	
	try
	{	
		document.getElementById(mydiv).innerHTML = msj
	}
	catch(e)
	{
		System.MessageBox.ShowError(e)
	}
}

/**
*	Mostrar o hacer invisible una capa
**/
System.showObjId = function(objId,visible)
{	
	var Myobj = document.getElementById(objId);
	Myobj.style.display = (visible ? "block" : "none");
	return false
}

/**
*	Cambio la imagen de un objeto img	
**/
System.updateImg = function(objimg,image)
{	
	var myimg = document.getElementById(objimg)
	myimg.src = image
	return false
}

/**
*	Establesco el display del objeto como bloque (visible)
**/	
System.setBlockDisplay = function(refobj)
{	
	try
	{	
		var obj = document.getElementById(refobj);
		obj.style.display = "block"
	}
	catch(e)
	{
		System.MessageBox.ShowError(e)
	}
}
	
/**
*	Establesco como no desplegable un objeto
**/
System.setNoneDisplay = function(refobj)
{	
	try
	{
		var obj = document.getElementById(refobj);
		obj.style.display = "none"		
	}
	catch(e)
	{
		System.MessageBox.ShowError(e)
	}
}

System.Forms = function(){}

/**
*	Habilito o deshabilito los componentes de un formulario
*
**/
System.Forms.enabledTextFields = function(form,isEnabled)
{	
	for(var i = 0; i < form.elements.length; i++) 	
	{	
		var type =  (typeof form.elements[i].type != "undefined")  ? form.elements[i].type.toUpperCase() : ""
		var tagName = form.elements[i].tagName.toUpperCase()
				
		if(type == "TEXT" || type == "PASSWORD" || type == "TEXTAREA")   					
			form.elements[i].readOnly = isEnabled ? false : true		
				
		//Objeto FILE
		if(tagName == "INPUT" && (type == "FILE" || type == "CHECKBOX"))
			form.elements[i].disabled = isEnabled ? false : true	
		
		//Objeto TEXTAREA
		if(tagName == "TEXTAREA")
			form.elements[i].readOnly = isEnabled ? false : true		
	
		//objeto SELECT
		if(tagName == "SELECT")
			form.elements[i].disabled = isEnabled ? false : true	
	}			
}
	
/**
*	Validando que todas las cajas de texto existan y luego Ejecuto un submit
*
**/
System.Forms.ValidAndSubmit = function(form)
{	
    if(arguments.length>1){
        var a = new Array()
        for(var i=1;i<arguments.length;i++)
                a[i-1] = arguments[i]
	
        var oStatus = System.Forms.validObjForm(form,a);			
    }else
        var oStatus = System.Forms.validObjForm(form);
/*    
    alert(arguments.length)
    alert(arguments[1])
    alert(arguments[1].name)
*/		
	if(oStatus.correcto)
		form.submit()
	else
	{	
		if(oStatus.unico)	
		   oStatus.obj.focus()		
	    alert(oStatus.msj);		    		
	}
}

/**
*	Valido que todos objetos de un formulario no esten vacio
*
**/
System.Forms.validObjForm = function(oForm)
{ 
	var oStatus = new Object()
	oStatus.correcto = true
	oStatus.unico = false
	oStatus.msj = ""
	oStatus.obj = null

    //alert(typeof arguments[1])
    //alert(arguments[1].length)
    //alert(arguments[1][0])
    //alert(arguments[1][0].name)
    //alert(oForm.txttelefono2.name)
    //eval('alert(oForm.'+arguments[1][0].name+'.name)')
	
    if(arguments.length>1){
        for(var i = 0; i < oForm.elements.length; i++)     
        {            
            var Type = (typeof oForm.elements[i].type != "undefined")  ? oForm.elements[i].type.toUpperCase() : ""
            var TagName = oForm.elements[i].tagName.toUpperCase()
            var Value = oForm.elements[i].value    
            
            var element = '';
            for(var j = 0; j < arguments[1].length; j++){

                //alert(arguments[1][j].name)
                //alert(oForm.elements[i].name)
                //alert(oForm.elements[i].name=='txttelefono2')
                //if(arguments[1][j].name==oForm.elements[i].name)
                    //oStatus.correcto = true
                if(oForm.elements[i].name==arguments[1][j].name){
                    element = arguments[1][j].name
                    break;
                }
            }
            
            //alert(oForm.elements[i].name)
            
            //if((Type == "TEXT" || Type == "PASSWORD" || TagName == "TEXTAREA" || TagName == "SELECT"))   
            //if((Type == "TEXT" || Type == "PASSWORD" || TagName == "TEXTAREA" || TagName == "SELECT") && Value == "")   
            //if((Type == "TEXT" || Type == "PASSWORD" || TagName == "TEXTAREA" || TagName == "SELECT") && Value == "")
            //alert((Type == "TEXT" || Type == "PASSWORD" || TagName == "TEXTAREA" || TagName == "SELECT") && Value == "" || element!=oForm.elements[i].name)
            //alert((Type == "TEXT" || Type == "PASSWORD" || TagName == "TEXTAREA" || TagName == "SELECT") && Value == "" || (element!=oForm.elements[i].name || element!=''))
            //if((Type == "TEXT" || Type == "PASSWORD" || TagName == "TEXTAREA" || TagName == "SELECT") && Value == "" && (element!=oForm.elements[i].name && element!=''))
            //if((Type == "TEXT" || Type == "PASSWORD" || TagName == "TEXTAREA" || TagName == "SELECT") && Value == "" || element!=oForm.elements[i].name)
            //if((Type == "TEXT" || Type == "PASSWORD" || TagName == "TEXTAREA" || TagName == "SELECT") && Value == "" || (element!=oForm.elements[i].name || element!=''))
            if((Type == "TEXT" || Type == "PASSWORD" || TagName == "TEXTAREA" || TagName == "SELECT") && Value == "" && element!=oForm.elements[i].name)
            {
                oStatus.correcto = false
                //alert('Status : ' + oStatus.correcto)
                if(!oStatus.unico)
                {    
                    oStatus.msj = oForm.elements[i].title + " no se ha llenado, por favor complete todos los campos del formulario..."                     
                    oStatus.obj = oForm.elements[i]
                    oStatus.unico = true                                        
                }
            }
        }
    }else{
        for(var i = 0; i < oForm.elements.length; i++)     
        {            
            var Type = (typeof oForm.elements[i].type != "undefined")  ? oForm.elements[i].type.toUpperCase() : ""
            var TagName = oForm.elements[i].tagName.toUpperCase()
            var Value = oForm.elements[i].value    
            
    //        if((Type == "TEXT" || Type == "PASSWORD" || TagName == "TEXTAREA" || TagName == "SELECT"))   
            if((Type == "TEXT" || Type == "PASSWORD" || TagName == "TEXTAREA" || TagName == "SELECT") && Value == "")   
            {    
                oStatus.correcto = false
                if(!oStatus.unico)
                {    
                    oStatus.msj = oForm.elements[i].title + " no se ha llenado, por favor complete todos los campos del formulario..."                     
                    oStatus.obj = oForm.elements[i]
                    oStatus.unico = true                                        
                }
                else
                {    
                    oStatus.msj = "Existe más de un campo del formulario que no se ha llenado, es necesario que todos los datos esten llenos"                                
                    oStatus.unico = false                                        
                    break
                }                        
            }
        }
    }
			
	return oStatus;	    
}

/**
*	Valido los objetos contenidos en un objeto div
*
**/
System.Forms.validObjDiv = function(div)
{	
	var objdiv = document.getElementById(div)
    var ListDOMObject = new Array();
    var oStatus = new Object()
    oStatus.unico = false
	oStatus.msj = "";
	oStatus.obj = null;
	    
	ListDOMObject[0] = "input"
	ListDOMObject[1] = "textarea"
			
	for(var i = 0; i < ListDOMObject.length; i++)
	{	
		var Listobjs = objdiv.getElementsByTagName(ListDOMObject[i])		      
		oStatus = System.Forms.validListObjs(Listobjs)			
		
		if(oStatus.msj != "")
			break
	}
	return oStatus
}

/**
*	Valido los objetos contenidos en un objeto
*
**/
System.Forms.validListObjs = function(Listobjs)
{ 
	var oStatus = new Object()
	oStatus.unico = false
	oStatus.msj = "";
	oStatus.obj = null;
		   
	for(var i = 0; i < Listobjs.length; i++)
    {
		var obj = Listobjs[i]
        if(obj.value == "" && (typeof obj.type != undefined && obj.type != "hidden")) 
        {
			if(!oStatus.unico)
            {	
				oStatus.msj = obj.title + " no se ha llenado, por favor complete todos los campos del formulario..." 					
				oStatus.obj = obj
				oStatus.unico = true	                
       		}
            else
			{	
				oStatus.msj = "Existe más de un campo del formulario que no se ha llenado, es necesario que todos los datos esten llenos"								
			    oStatus.unico = false										
			    break
			}
    	}		            
 	}    
		        
	return oStatus
}

/**
*	Extrae el src de un img y lo envio al valor de un hiddentext
*
**/
System.getImage = function(file, imagen, name)
{	
    //file = 'file:///C:/images2.jpg'
    //file = 'C:/images2.jpg'
    //file = 'file:///C:/Documents and Settings/USUARIO/Mis documentos/Mis imágenes/Google Talk/Bear.bmp'
    //file = 'C:/Documents and Settings/USUARIO/Mis documentos/Mis imágenes/Google Talk/Bear.bmp'
    //file = './images/site/reward_128.gif'
    
    //alert(file)
    //alert(imagen.src)
    //alert(name.value)

    //win = window.open()
    //win.document.write(file)    
	file = file.escapeHTML()
	imagen.src = file
	name.value = file
    //alert(imagen.src)
}

/**
*	Imprimo un valor en la página
**/
System.Write = function(value)
{
	document.write(value);
}

/**
*	Imprimo una cadena en la página con un salto de línea HTML
**/
System.WriteLn = function(value)
{
	document.write(value+"<br>");
}


System.Cookie = function(){}

/**
*	Escribir un valor en la Cookie
*
**/
System.Cookie.Write = function(text)
{
	document.cookie = text
}

/**
*	Longitud de una Cookie
*
**/
System.Cookie.Length = function()
{
	return document.cookie.length
}

/**
*	Recuperar una variable en sesion javascript
**/
System.Cookie.Get = function(name)
{
	var re = new RegExp(name+"=[^;]+", "i"); //construct RE to search for target name/value pair
	if(document.cookie.match(re)) //if cookie found
		return document.cookie.match(re)[0].split("=")[1] //return its value
	return ""
}

/**
*	Guardar una variable en sesion javascript	
**/
System.Cookie.Set = function(name, value)
{
	System.Cookie.Write(name + "=" + value)  //cookie value is domain wide (path=/)
}

/**
*	Limpia la Coookie de la página
*
**/
System.Cookie.Clean = function()
{
	
}

System.QuickSort = function(){}

/**
*    Ordeba una matriz
*
**/
System.QuickSort.Order = function(matriz,desc,izq,der)
{
    izq = (typeof izq != "undefined"? izq: 0)
    der = (typeof der != "undefined"? der: matriz.length-1)
    desc = (typeof desc != "undefined"? desc: true)    
    
    var i = izq
    var j = der        
     var Piv = matriz[Math.floor((izq + der) / 2)];    
    var condicion1 = (desc? "matriz[i] < Piv": "matriz[i] > Piv")
    var condicion2 = (desc? "Piv < matriz[j]": "Piv > matriz[j]")
    do {
        while(eval(condicion1) && (i < der))
            i++
                
        while(eval(condicion2) && (j > izq))
            j--
            
        if(i <= j)
        {   //var Aux = new Array()
            var Aux = matriz[i]
            matriz[i] = matriz[j]
            matriz[j] = Aux
            i++
            j--
        }
       } while(i <= j)
    
    if(izq < j)
        System.QuickSort.Order(matriz,desc,izq,j)
        
     if(i < der)
        System.QuickSort.Order(matriz,desc,i,der)
}

/**
*  Devuelve un arreglo Filtrado sin elementos repetidos
*
**/
System.QuickSort.Distinct = function(list)
{
    var listFilter = new Array()
    for(var i in list)
    {    
        var repetido = false
        for(var j in listFilter)
            if(listFilter[j] == list[i])
                repetido = true
                
        if(!repetido)
            listFilter[listFilter.length] = list[i]
    }
    return listFilter
}

System.BubbleSort = function(){}

/**
*	Ordeba una matriz
*
**/
System.BubbleSort.Order = function(matriz,desc)
{
    var matrizcopy = new Array()
    //matrizcopy = matriz //esto no solo crea una copia si no crea una referencia al mismo objeto es decir lo modifica
    
    //esta es la manera correcta de crear una copia de un arreglo ya que no hace referencia a la matriz original
    for(i=0;i<matriz.length;i++){
        matrizcopy[i]=matriz[i]
    }
    
    var x, y, holder;
    // The Bubble Sort method.

    for(x = 0; x < matrizcopy.length; x++) {
        for(y = 0; y < (matrizcopy.length-1); y++) {
            if(desc=='desc'){
                if(matrizcopy[y] < matrizcopy[y+1]) {
                    holder = matrizcopy[y+1];
                    matrizcopy[y+1] = matrizcopy[y];
                    matrizcopy[y] = holder;
                }
            }else{
                //if(desc=='asc'){
                if(matrizcopy[y] > matrizcopy[y+1]) {
                    holder = matrizcopy[y+1];
                    matrizcopy[y+1] = matrizcopy[y];
                    matrizcopy[y] = holder;
                }
            }
        }
    }
    return matrizcopy
}
/*
var a = new Array(1,2,6,3,4,5)
alert(a)
var b = System.BubbleSort.Order(a,'asc')
alert(a)
alert(b)
var c = System.BubbleSort.Order(a,'desc')
alert(c)
alert(a)
*/


/**
*  Devuelve un arreglo Filtrado sin elementos repetidos
*
**/
System.QuickSort.Distinct = function(list)
{
	var listFilter = new Array()
	for(var i in list)
	{	
		var repetido = false
		for(var j in listFilter)
			if(listFilter[j] == list[i])
				repetido = true
				
		if(!repetido)
			listFilter[listFilter.length] = list[i]
	}
	return listFilter
}


System.Images = function(){}

System.Images.MM_preloadImages = function() 
{	
	var d = document; 
	if(d.images)
	{	if(!d.MM_p) 
			d.MM_p = new Array();
    	var i,j=d.MM_p.length,a = System.Images.MM_preloadImages.arguments; 
		for(i = 0; i < a.length; i++)
			if(a[i].indexOf("#") != 0)
			{	d.MM_p[j] = new Image; 
				d.MM_p[j++].src = a[i];
			}
	}
}


System.Images.MM_findObj = function(n, d) 
{	
	//v4.01
    //alert(n);
    //alert(d);
    
  	var p,i,x;  
	if(!d) 
		d = document; 
    
    //p = n.indexOf("?");
    //alert(p);
    //alert((p > 0);
    //alert(parent.frames.length);
    //alert((p = n.indexOf("?")) > 0 && parent.frames.length);
	if((p = n.indexOf("?")) > 0 && parent.frames.length) 
	{	
		d = parent.frames[n.substring(p+1)].document; 
		n = n.substring(0,p);
	}
//    alert(n)
//    alert(d[n])
//    alert(d.all)
  	if(!(x = d[n]) && d.all) 
		x = d.all[n]; 
//    alert(x)
	for (i = 0; !x && i < d.forms.length; i++) 
		x = d.forms[i][n];
  	for(i = 0; !x && d.layers && i < d.layers.length; i++) 
		x = System.Images.MM_findObj(n,d.layers[i].document);
  	if(!x && d.getElementById) 
		x = d.getElementById(n); 
	
	return x;
}

System.Images.MM_nbGroup = function(event, grpName) 
{	
	//v6.0
  	var i,img,nbArr,args = System.Images.MM_nbGroup.arguments;
  	if (event == "init" && args.length > 2) 
	{	
		if ((img = System.Images.MM_findObj(args[2])) != null && !img.MM_init) 
		{	
			img.MM_init = true; img.MM_up = args[3]; img.MM_dn = img.src;
		 	if ((nbArr = document[grpName]) == null) 
				nbArr = document[grpName] = new Array();
				
      		nbArr[nbArr.length] = img;
			for (i=4; i < args.length-1; i+=2) 
				if ((img = System.Images.MM_findObj(args[i])) != null) 
				{	
					if (!img.MM_up) 
						img.MM_up = img.src;
			        img.src = img.MM_dn = args[i+1];
			        nbArr[nbArr.length] = img;
		    	} 	
		}
	} 
	else 
		if (event == "over") 
		{	
			document.MM_nbOver = nbArr = new Array();
    		for (i = 1; i < args.length-1; i += 3) 
				if ((img = System.Images.MM_findObj(args[i])) != null) 
				{	
					if (!img.MM_up) 
						img.MM_up = img.src;
					img.src = (img.MM_dn && args[i+2]) ? args[i+2] : ((args[i+1])? args[i+1] : img.MM_up);
      				nbArr[nbArr.length] = img;
    			}
		} 
		else 
			if (event == "out" ) 
			{	
				for (i=0; i < document.MM_nbOver.length; i++) 
				{	
					img = document.MM_nbOver[i]; 
					img.src = (img.MM_dn) ? img.MM_dn : img.MM_up; 
				}
  			} 
			else 
				if (event == "down") 
				{	
					nbArr = document[grpName];
					if (nbArr)
      					for (i=0; i < nbArr.length; i++) 
						{	
							img = nbArr[i]; 
							img.src = img.MM_up; 
							img.MM_dn = 0; 
						}
						          
    				document[grpName] = nbArr = new Array();
				    for (i=2; i < args.length-1; i+=2){
                        //alert(i);
                        //alert(args.length-1);
						if ((img = System.Images.MM_findObj(args[i])) != null) 
						{	
                            //alert(img);
                            //alert(img.MM_up);
							if (!img.MM_up) 
								img.MM_up = img.src;
 							img.src = img.MM_dn = (args[i+1])? args[i+1] : img.MM_up;
   	   						nbArr[nbArr.length] = img;
						} 
                    }
				}
}

/**
*	Clase para el manejo de "Objetos Flash"
*
**/
System.Object = function(){}

System.Object.AC_AddExtension = function(src, ext)
{	
	if (src.indexOf('?') != -1)
    	return src.replace(/\?/, ext+'?'); 
	else
    	return src + ext;
}


System.Object.AC_Generateobj = function(objAttrs, params, embedAttrs) 
{ 	
	var str = '<object ';
  	for (var i in objAttrs)
    	str += i + '="' + objAttrs[i] + '" ';
		str += '>';
		
	for (var i in params)
    	str += '<param name="' + i + '" value="' + params[i] + '" /> ';
		str += '<embed ';
		
	for (var i in embedAttrs)
    	str += i + '="' + embedAttrs[i] + '" ';
  		str += ' ></embed></object>';

  	document.write(str);
}

//********************************************************************
System.Object.AC_FL_RunContent = function()
{	
	var ret = 
    	System.Object.AC_GetArgs
	    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
    	, "application/x-shockwave-flash"
		);
		System.Object.AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

//********************************************************************
System.Object.AC_SW_RunContent = function()
{	
	var ret = 
    	System.Object.AC_GetArgs
		(  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     	, null
		);
		System.Object.AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

//********************************************************************
System.Object.AC_GetArgs = function(args, ext, srcParamName, classid, mimeType)
{	
	var ret = new Object();
	ret.embedAttrs = new Object();
	ret.params = new Object();
	ret.objAttrs = new Object();
	for (var i=0; i < args.length; i=i+2)
	{	
		var currArg = args[i].toLowerCase();    

		switch (currArg)
		{	
			case "classid":
				break;
			case "pluginspage":
		        ret.embedAttrs[args[i]] = args[i+1];
        		break;
		    case "src":
		    case "movie":	
        		args[i+1] = System.Object.AC_AddExtension(args[i+1], ext);
		        ret.embedAttrs["src"] = args[i+1];
		        ret.params[srcParamName] = args[i+1];
		        break;
	      	case "onafterupdate":
    	  	case "onbeforeupdate":
      		case "onblur":
      		case "oncellchange":
      		case "onclick":
		    case "ondblClick":
      		case "ondrag":
      		case "ondragend":
			case "ondragenter":
			case "ondragleave":
			case "ondragover":
			case "ondrop":
			case "onfinish":
			case "onfocus":
			case "onhelp":
			case "onmousedown":
			case "onmouseup":
			case "onmouseover":
			case "onmousemove":
			case "onmouseout":
			case "onkeypress":
			case "onkeydown":
			case "onkeyup":
			case "onload":
			case "onlosecapture":
			case "onpropertychange":
			case "onreadystatechange":
			case "onrowsdelete":
			case "onrowenter":
			case "onrowexit":
			case "onrowsinserted":
			case "onstart":
			case "onscroll":
			case "onbeforeeditfocus":
			case "onactivate":
			case "onbeforedeactivate":
			case "ondeactivate":
			case "type":
			case "codebase":
				ret.objAttrs[args[i]] = args[i+1];
				break;
			case "width":
			case "height":
			case "align":
			case "vspace": 
			case "hspace":
			case "class":
			case "title":
			case "accesskey":
			case "name":
			case "id":
			case "tabindex":
				ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
				break;
			default:
				ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    	}
  	}
  	ret.objAttrs["classid"] = classid;
  	if (mimeType) 
		ret.embedAttrs["type"] = mimeType;
		
  	return ret;
}
