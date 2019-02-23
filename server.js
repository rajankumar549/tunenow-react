var fs = require('fs');
var createError = require('http-errors');
var express = require('express');
var path = require('path');


var app = express();
var router = express.Router();

app.set('views', path.join(__dirname, 'build'));

app.use('/', express.static(path.join(__dirname, 'build')))
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var baseRequest = router.all('*',(req,res)=>{
	res.status(200).sendFile(path.join(__dirname,'build/index.html'));
});
app.use(baseRequest)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use((err, req, res, next) => {
	console.error(err);
	if(err.name === "NotFoundError")
		res.status(404).send("<h3>404 Not Found</h3>");
	else
		res.status(500).json({
			status: 500,
			msg:'server error',
			err : err
		})
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})

app.listen(process.env.PORT, err => {
	if (err) {
		console.log(err);
		process.exit(1);
	}
	console.log(process.env)
	console.log(
		`Production Server is now running on port ${process.env.PORT}`
	);
});

module.exports = app;
