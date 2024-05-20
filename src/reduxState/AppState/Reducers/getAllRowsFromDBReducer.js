


// Le AsyncThunk qui à donné à manger à ce Reducer
import { getAllRowsFromDB } from "../AsyncThunks/getAllRowsFromDB";
import { organizeRowsInGroups } from "./organizeRowsInGroups";

/**
 *
 * @param {*} builder, bidule machin truc nécessaire
 *
 * Ce Reducer à comme travail de stocker les rows,
 * en vrac, dans state.allRows, et en groupes, dans state.groups.
 */
export function getAllRowsFromDBReducer(builder) {
  // lAsyncThunk est en train de préparer/charger les données.
  builder.addCase(getAllRowsFromDB.pending, (state, action) => {
    // indique que chargement en cours, quand cest = true
    state.loading = true;
  });

  // lAsyncThunk à fini de charger les données.
  // Les données (retournées par lAsyncThunk) sont dispo dans action.payload
  builder.addCase(getAllRowsFromDB.fulfilled, (state, action) => {
    // indique que chargement terminé
    state.loading = false;

    // stocke les données (rows) en vrac
    state.allRows = action.payload;

    // range en ordre croissant dajout
    // selon (row.itemIndex)
    state.allRows.sort((a, b) => a.itemIndex - b.itemIndex);

    // répartit les données en groupes, selon besoins
    state.groups = organizeRowsInGroups({
      rows: action.payload,
    });
  });

  // Une erreur est survenue dans lAsyncThunk
  builder.addCase(getAllRowsFromDB.rejected, (state, action) => {
    // indique que chargement terminé
    state.loading = false;
  });
}
