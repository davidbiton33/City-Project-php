<?php



$str = 'hello from php';

$arr = array("one", "two");
consoleLog($str);
consoleLog($arr);


var_dump($arr);
var_dump($str);


function consoleLog($data){
    if(is_array($data))
    $data = implode(',', $data);

echo "<script> console.log('Debug PHP: " . $data . " ');</script>";

}

?>