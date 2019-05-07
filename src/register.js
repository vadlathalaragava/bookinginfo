<!DOCTYPE html> 
<html lang="en">  
<head>    
<title>My first Bootstrap page </title>    
<meta name="viewport" content="width=device-width, initialscale=1">    
<link href="CSS/bootstrap.min.css" rel="stylesheet">   
<link href="CSS/bootstrap-theme.min.css" rel="stylesheet">    
<script type="text/javascript" src="JS/bootstrap.min.js"></script> 
 </head> 
 <body>
<div class="container" style="max-width:600px;margin:60px auto;">
	<form role="form">
	   <div class="form-group">
	      <label for="name">First name</label>
	      <input type="name" class="form-control" id="fname" placeholder="Enter name">
	   </div>
	   <div class="form-group">
	      <label for="address">Second name</label>
	      <input type="address" class="form-control" id="sname" placeholder="Enter surname">
	   </div>
	   <div class="form-group">
	      <label for="email">Email</label>
	      <input type="email" class="form-control" id="email" placeholder="Enter email">
	   </div>
	   <div class="form-group">
	      <label for="pwd">Password</label>
	      <input type="password" class="form-control" id="pwd" placeholder="Enter password">
	   </div>
	     <button type="submit" class="btn btn-default">Register</button>
	</form>
</div>
</body>
</html>