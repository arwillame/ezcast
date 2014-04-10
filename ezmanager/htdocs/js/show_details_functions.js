/*
* EZCAST EZmanager 
*
* Copyright (C) 2014 Université libre de Bruxelles
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
*/

// TODO: Restore the selection in album list

/**
 * Toggles the asset details visibility. If called when we open the div, this function will also retrieve the asset information
 */
function show_asset_details(album, asset) {
    var targetElement;
    targetElement = document.getElementById('asset_'+asset+'_details') ;
    
    // Case 1: The div was hidden; we retrieve the info and display it
    if (targetElement.style.display == "none")
    {
        targetElement.style.display = "" ;
        targetElement.innerHTML = '<div style="text-align: center;"><img src="images/loading_white.gif" alt="loading..." /></div>';
        makeRequest('index.php', '?action=view_asset_details&album='+album+'&asset='+asset, 'asset_'+asset+'_details');
        MM_DisplayHideLayers('asset_'+asset,'','hide','asset_'+ asset +'_clic','','show');
    }
    // case 2: The div was displayed; we hide it
    else {
        targetElement.style.display = "none" ;
        targetElement.innerHTML = '';
        MM_DisplayHideLayers('asset_'+asset,'','show','asset_'+ asset +'_clic','','hide');
    }
}

/**
 * Replaces the information divs by editable text inputs for the asset specified
 */
function show_edit_form(asset) {
    if(document.getElementById('title_'+asset).style.display != 'none') {
        document.getElementById('title_'+asset).style.display = 'none';
        document.getElementById('description_'+asset).style.display = 'none';

        document.getElementById('title_'+asset+'_edit').style.display = '';
        document.getElementById('description_'+asset+'_edit').style.display = '';
        document.getElementById(asset+'_submit').style.display = '';
    }
    else {
        document.getElementById('title_'+asset).style.display = '';
        document.getElementById('description_'+asset).style.display = '';

        document.getElementById('title_'+asset+'_edit').style.display = 'none';
        document.getElementById('description_'+asset+'_edit').style.display = 'none';
        document.getElementById(asset+'_submit').style.display = 'none';
    }
}

function show_embed_player(album, asset, quality, type, token) {
    makeRequest('distribute.php', '?action=embed&album='+album+'&asset='+asset+'&type='+type+'&quality='+quality+'&origin=podman&token='+token+'&iframe=true&width=185&height=149', 'Player_'+asset+'_'+type);
}