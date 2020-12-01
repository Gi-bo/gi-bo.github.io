<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>demineur</title>
    <link rel="stylesheet" href="style.css">
</head>

<?php
$json_url = "https://api.covid19api.com/countries";  
$crl = curl_init();
curl_setopt($crl, CURLOPT_URL, $json_url);
curl_setopt($crl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($crl, CURLOPT_SSL_VERIFYPEER, FALSE); 
$json = curl_exec($crl);
curl_close($crl);
$emp = json_decode($json, TRUE);
?>

<body>
    <div class="row">
        <?php
        foreach ($emp as $value){
            $country = $value["Slug"];
            $country_json_url = "https://api.covid19api.com/total/country/".$country."/status/deaths";  
            $country_crl = curl_init();
            curl_setopt($country_crl, CURLOPT_URL, $country_json_url);
            curl_setopt($country_crl, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($country_crl, CURLOPT_SSL_VERIFYPEER, FALSE); 
            $country_json = curl_exec($country_crl);
            curl_close($country_crl);
            $country_emp = json_decode($country_json, TRUE);
            echo $country."<br>";

            if (isset(end($country_emp)["Cases"])) {

                echo "nombre de morts : ".end($country_emp)["Cases"]."<br>";
            } else {
                echo "nombre de morts : 0<br>";
            }
        }
        ?>
    </div>
</body>
</html>