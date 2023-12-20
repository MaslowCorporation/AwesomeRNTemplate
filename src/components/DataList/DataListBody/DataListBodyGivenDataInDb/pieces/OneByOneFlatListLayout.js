/* PLOP_INJECT_IMPORT */
import { KeyExtractor } from "src/services/KeyExtractor/KeyExtractor";
import { React } from "react";
import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { handleEndOfListCallback } from "./handleEndOfListCallback";
import { MemoizedSingleItemGivenNeeds } from "./SingleItemGivenNeeds";

/**
 *
 * @param {*} currentViewabilityConfig,
 * Permet de déterminer à quel pourcentage de scroll,
 * on passe d'un item à un autre, dans la FlatList.
 *
 * @param {*} onViewableItemsChanged,
 * callback quand l'item visible à l'écran à changé.
 *
 * @param {*} dataListItemHeight,
 * la hauteur d'un item individuel de la liste d'items.
 *
 * @param {*} dataListItemWidth,
 * la largeur d'un item individuel de la liste d'items.
 *
 * @param {*} properSnapToIntervalAndOffset,
 * combien de scroll pour passer d'un item à l'autre.
 *
 * @param {*} dataItems,
 * la liste d'items.
 *
 * @param {*} horizontal,
 * scroll horizontal, ou pas ?
 *
 * @param {*} dataListStyle,
 * styles/callbacks à appliquer aux items de la liste.
 *
 * @param {*} importantData, contient les infos nécessaire au bon scroll one by one,
 * pour éviter re-renders inutiles.
 * contient notamment l'index de l'item en cours de visionnage.
 * valable si dataListStyle.dataListScrollDirection
 *
 * @param {*} backgroundColor, la couleur d'arrière plan
 * de l'écran
 * (pour placeholders onebyoneflatlist par ex.)
 *
 * @returns la liste scrollable d'items (1 by 1, vertical ou horizontal)
 */
export const OneByOneFlatListLayout = ({
  //setRef,
  currentViewabilityConfig,
  onViewableItemsChanged,
  dataListItemHeight,
  dataListItemWidth,
  properSnapToIntervalAndOffset,
  dataItems,
  horizontal,
  dataListStyle,
  importantData,
  backgroundColor,
}) => {
  // combien d'items il y  a t'il dans la liste de données ?
  const qtyItems = dataItems.length;

  /**
   * le renderer à appliquer au FlatList
   * pour créer les items du FlatList.
   */
  const renderItem = ({ item, index }) => {
    // affiche l'UI de l'item, selon que l'item est PNJ, ou pas, custom.
    return (
      <MemoizedSingleItemGivenNeeds
        importantData={importantData}
        dataListItemHeight={dataListItemHeight}
        dataListItemWidth={dataListItemWidth}
        dataListStyle={dataListStyle}
        item={item}
        index={index}
        backgroundColor={backgroundColor}
      />
    );
  };

  /**
   *
   * @param {*} data
   * @param {*} index
   *
   * @returns un truc qui permet d'optimiser FlatList
   */
  const getItemLayout = (data, index) => ({
    length: dataListItemWidth,
    offset: dataListItemWidth * index,
    index,
  });

  /**
   *
   * @param {*} ref
   *
   * permet de stocker la télécommande de FlatList en dehors de ce component
   *
  const refSetter = (ref) => {
    console.log("stocke réference");
    setRef(ref);
  };
  */

  /**
   *
   * @param {*} event
   *
   * permet callback quand on est au bout du FlatList
   */
  const onScrollEndDrag = (event) => {
    handleEndOfListCallback({
      qtyItems,
      properSnapToIntervalAndOffset,
      horizontal,
      dataListStyle,
      event,
    });
  };

  return (
    /* le conteneur qui contient la liste */
    <View style={styles.flatListContainer}>
      {/* la liste de données*/}
      <FlatList
        // ze style
        style={{
          // pacha boss
          flex: 1,
        }}
        // fix: On set la quantité maximum
        // d'items à créer dans la FlatList
        // (pas trop, pas trop peu, goldilocks)
        maxToRenderPerBatch={5}
        // fix
        removeClippedSubviews={true}
        // fix
        //windowSize={1}
        // l'index de l'item à montrer en premier
        initialScrollIndex={importantData?.currentIndex}
        // des données de taille (length) et place d'item(s) (offset)
        // dans la FlatList
        getItemLayout={getItemLayout}
        // la liste de données
        data={dataItems}
        // crée le component pour chaque item de la liste de données
        renderItem={renderItem}
        // **** trucs utile pour scroll smooth like a baby d*ck ****
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={properSnapToIntervalAndOffset}
        // *********************************************************

        // génère un key pour chaque item de la liste
        keyExtractor={KeyExtractor}
        // callback qd item visible à changé
        onViewableItemsChanged={onViewableItemsChanged}
        // %tage déterminant passage d'un item à un autre
        viewabilityConfig={currentViewabilityConfig}
        // permet de récupérer la télécommande du FlatList,
        // de l'extérieur de ce component
        //ref={refSetter}
        // scroll horizontal, ou pas ?
        horizontal={horizontal}
        // callback qd on pousse au dela du dernier item de la liste
        onScrollEndDrag={onScrollEndDrag}
        // permet scroll 1 by 1 seulement
        disableIntervalMomentum={true}
      />
    </View>
  );
};
