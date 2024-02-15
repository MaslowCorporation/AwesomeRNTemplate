/* PLOP_INJECT_IMPORT */
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import React from "react";
import { styles } from "./DataListItem.style.js";
import { TouchableHighlight } from "react-native";
import { Card } from "@rneui/themed";
import { itemInfos } from "./DataListItemIntestines/itemInfos";
import { itemNameIfNameExists } from "./DataListItemIntestines/itemNameIfNameExists";
import { thumbnailPicIfUrlExists } from "./DataListItemIntestines/thumbnailPicIfUrlExists";
import { SoundPlayer } from "src/services/SoundPlayer/SoundPlayer.js";

/**
 *
 * DataListItem.
 * le layout par défaut dun item de données.
 
DataListItem consomme un prop itemStyle = {
  thumbUrl: "",
  itemName: "",
  itemsInfos: [{infoIconUrl: "", infoIconPath: "", infoTxt: ""}, {...}], 
  onItemClicked: (itemData) => {},
  onItemLongPress: (itemData) => {},
}

et 

itemData = {
  les données stockées dans la DB pour cet item
}

<DataListItem
  itemStyle={{
    thumbUrl: null,
    itemName: "JeanThug",
    itemsInfos: [
      {
        infoIconUrl: null,
        infoIconPath:
          "https://lh3.googleusercontent.com/a/AATXAJx9OD3G0U9fgZgXbd3aiZ_vtdMWVXQgVQt62_0d=s96-c",
        infoTxt: string
      },
      {
        infoIconUrl: null,
        infoIconPath: null,
        infoTxt: string
      },
    ],
    onItemClicked: (itemData) => {

    },
    onItemLongPress: (itemData) => {
      
    },
  }}
/>

 * Veille à ce que le component photo ne soit pas affiché.
 * si une prop itemStyle.thumbUrl nest pas fournie.
 * 
 * Affiche une liste de vignettes + texte,
 * via prop itemStyle.itemsInfos = [{infoIconUrl, infoIconPath, infoTxt}, {...}]
 * si itemsInfos vide ou inexistant, on affiche rien
 * 
 * en cliquant dessus, on execute une prop onItemClicked. si fourni.
 * 
 * un clique long exécute une prop onItemLongPress, si fourni.
 *
 * @param {*} un objet contenant: {
 *   itemStyle: { le style et contenu de cette vignette ditem },
 *   itemData: { les données stockées dans la DB pour cet item },
 * }
 *
 * @returns la vignette représentant une item a visonner/créer/etc...
 */
const DataListItem = ({ itemStyle, itemData }) => {
  return (
    /* permet de pouvoir cliquer sur litem */
    <TouchableHighlight
      activeOpacity={0.6}
      style={{
        justifyContent: "center",
        /* pour le teste */
      }}
      underlayColor="#DDDDDD"
      onPress={() => {
        SoundPlayer({ sound: itemStyle.clickSound });

        RunIfPossible({ func: itemStyle?.onItemClicked, args: itemData });
      }}
      onLongPress={() => {
        SoundPlayer({ sound: itemStyle.clickSound });

        RunIfPossible({
          func: itemStyle?.onItemLongPress,
          args: itemData,
        });
      }}
    >
      {/*la vignette dans son ensemble*/}
      <Card
        containerStyle={[
          styles.containerStyle,
          {
            backgroundColor: itemStyle.backgroundColor,
            borderColor: itemStyle.contentColor,
          },
        ]}
      >
        {/* le thumbnail de cette vignette, si lurl existe */}
        {thumbnailPicIfUrlExists(itemStyle)}

        {/* le nom de cette item */}
        {itemNameIfNameExists(itemStyle)}

        {/* divers infos a props de cet item */}
        {itemInfos(itemStyle)}
      </Card>
    </TouchableHighlight>
  );
};

export { DataListItem };
