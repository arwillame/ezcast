<!--
 This page is meant to contain a FAQ/tutorial on how to use the service
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <!-- 
    * EZCAST EZmanager 
    *
    * Copyright (C) 2016 Université libre de Bruxelles
    *
    * Written by Michel Jansens <mjansens@ulb.ac.be>
    * 		    Arnaud Wijns <awijns@ulb.ac.be>
    *                   Antoine Dewilde
    * UI Design by Julien Di Pietrantonio
    *
    * This software is free software; you can redistribute it and/or
    * modify it under the terms of the GNU Lesser General Public
    * License as published by the Free Software Foundation; either
    * version 3 of the License, or (at your option) any later version.
    *
    * This software is distributed in the hope that it will be useful,
    * but WITHOUT ANY WARRANTY; without even the implied warranty of
    * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    * Lesser General Public License for more details.
    *
    * You should have received a copy of the GNU Lesser General Public
    * License along with this software; if not, write to the Free Software
    * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
        -->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=8" />
        <title>®podman_page_title®</title>
        <link rel="shortcut icon" type="image/ico" href="images/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="css/style_podman.css" />
        <link rel="stylesheet" type="text/css" href="css/styleHelp.css" />
        <script type="text/javascript" src="js/AppearDissapear.js"></script>
        <script type="text/javascript" src="js/hover.js"></script>
        <script type="text/javascript" src="js/httpRequest.js"></script>
        <script type="text/javascript" src="js/combo_boxes.js"></script>
        <script>
            function visibilite(thingId)
            {
                var targetElement;
                targetElement = document.getElementById(thingId);
                if (targetElement.style.display == "none")
                {
                    targetElement.style.display = "";
                } else {
                    targetElement.style.display = "none";
                }
            }
        </script>
    </head>
    <body>
        <div class="container">
            <?php include_once 'tmpl/' . get_lang() . '/div_help_header.php'; ?>
            <div id="global">

                <div id="Bloc-ensemble">
                    <?php include_once 'tmpl/' . get_lang() . '/div_help_content.php'; ?>
                </div>
            </div>
            <!-- FOOTER - INFOS COPYRIGHT -->
            <?php include_once 'tmpl/' . get_lang() . '/div_main_footer.php'; ?>
            <!-- FOOTER - INFOS COPYRIGHT [FIN] -->
        </div><!-- Container fin -->
    </body>
</html>
