import React from 'react';
import {View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import s from './styles';
import CardLayout from 'src/components/CardLayout';
import {deleteFromShoppingList} from 'src/services/api';
import {CustomButton, CustomText} from 'src/components';
import {COLORS, PADDINGS} from 'src/constants/theme';
import {ShoppingItem} from 'src/types/shoppingList';

type Props = {
  item: ShoppingItem;
};

const ShoppingItemCard = ({item}: Props) => {
  // TODO: Refactor this later
  const renderDeleteAction = () => (
    <View
      style={{
        justifyContent: 'center',
        paddingHorizontal: PADDINGS.small,
      }}>
      <CustomButton
        text={'Delete'}
        color={COLORS.redPrimary}
        onPress={() => deleteFromShoppingList(item.id)}
      />
    </View>
  );

  return (
    <Swipeable
      containerStyle={s.container}
      renderRightActions={renderDeleteAction}>
      <CardLayout>
        <View style={s.row}>
          <View style={s.firstItem}>
            <CustomText title>{item.name}</CustomText>
          </View>

          {!!item.price && (
            <CustomText small>
              {item.price?.value} {item.price?.currency}
            </CustomText>
          )}
        </View>
      </CardLayout>
    </Swipeable>
  );
};

export default ShoppingItemCard;
