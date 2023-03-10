function fusion(depl, grille, verification) {
    let possible = false;
    let deplL = depl[0];
    let deplC = depl[1]; 
    if (deplC != 0)  {
        if(deplC == -1) {   //fusion gauche
            for (let l = 0; l < grille.l; l++) {
                for (let c = 0; c < grille.c - 1; c++) {
                    if (grille.tabTuiles[l][c].val == grille.tabTuiles[l][c+1].val) {
                        if (!verification) {
                            grille.tabTuiles[l][c].val = grille.tabTuiles[l][c].val*2;
                            grille.tabTuiles[l][c+1].val = 0;
                            if (grille.tabTuiles[l][c].triche == false && grille.tabTuiles[l][c+1].triche == false){
                                grille.score += grille.tabTuiles[l][c].val;
                                grille.updateSuccess(grille.tabTuiles[l][c].val);
                            }
                            else
                                grille.tabTuiles[l][c].triche = true;
                        }
                        possible = true;
                    }
                }
            }
        } else {       //fusion droite 
            for (let l = 0; l < grille.l; l++) {
                for (let c = grille.c - 1; c != 0; c--) {
                    if (grille.tabTuiles[l][c].val == grille.tabTuiles[l][c-1].val) {
                        if (!verification) {
                            grille.tabTuiles[l][c].val = grille.tabTuiles[l][c].val*2;
                            grille.tabTuiles[l][c-1].val = 0;
                            if (grille.tabTuiles[l][c].triche == false && grille.tabTuiles[l][c-1].triche == false){
                                grille.score += grille.tabTuiles[l][c].val;
                                grille.updateSuccess(grille.tabTuiles[l][c].val);
                            }
                            else
                                grille.tabTuiles[l][c].triche = true;

                        }
                        possible = true;
                    }
                }
            }
        }

    } else  {
        if (deplL == -1) {  //fusion bas 
            for (let c = 0; c < grille.c; c++) {
                for (let l = grille.l - 1; l != 0; l--) {
                    if (grille.tabTuiles[l][c].val == grille.tabTuiles[l-1][c].val) {
                        if (!verification) {
                            grille.tabTuiles[l][c].val = grille.tabTuiles[l][c].val*2;
                            grille.tabTuiles[l-1][c].val = 0;
                            if (grille.tabTuiles[l][c].triche == false && grille.tabTuiles[l-1][c].triche == false){
                                grille.score += grille.tabTuiles[l][c].val;
                                grille.updateSuccess(grille.tabTuiles[l][c].val);
                            }
                            else
                                grille.tabTuiles[l][c].triche = true;
                        }
                        possible = true;
                    }
                }
            }
        } else {        //fusion haut 
            for (let c = 0; c < grille.c; c   ++) {
                for (let l = 0; l < grille.l - 1; l++) {
                    if (grille.tabTuiles[l][c].val == grille.tabTuiles[l+1][c].val) {
                        if (!verification) {
                            grille.tabTuiles[l][c].val = grille.tabTuiles[l][c].val*2;
                            grille.tabTuiles[l+1][c].val = 0;
                            if (grille.tabTuiles[l][c].triche == false && grille.tabTuiles[l+1][c].triche == false){
                                grille.score += grille.tabTuiles[l][c].val;
                                grille.updateSuccess(grille.tabTuiles[l][c].val);
                            }
                            else
                                grille.tabTuiles[l][c].triche = true;
                        }
                        possible = true;
                    }
                }
            }
        }
    }
    return possible;
}


export {fusion};