<?
	$name = $_GET['name'];
	$phone = $_GET['phone'];
    $question = $_GET['question'];
	file_put_contents("data.txt", "{$name}|{$phone}|{$question}");

?> 