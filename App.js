

import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import Dialog from "react-native-dialog";
import DialogInput from 'react-native-dialog/lib/Input';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.flatListItem, textColor]}>{item.text}</Text>
  </TouchableOpacity>
);

const AppTest = () => {
  
   const [monChoix, setMonChoix] = useState(null);
   const [modifText, onChangeModifText] = useState("d")

  const [visible, setVisible] = useState(false);
  const [motTemp, setMotTemp] = useState('');
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const showDialog = () => {
    setVisible(true);
  };

  const annulerMot = () => {
    setVisible(false);
  };

  const ajouterMot = () => {
    
    setVisible(false);
    setData(listActuelle => [...listActuelle, {id: data.length.toString(), text: motTemp}]);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#696969" : "lightsteelblue";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      
      <Item
        item={item}
        onPress={() => {  
          setSelectedId(item.id);
          setMonChoix(item.id);
          onChangeModifText(data[item.id].text);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };



const showDialogM = () => {
  setVisibleM(true);
};

const annulerMotM = () => { 
  setVisibleM(false);
};

const modifierMot = () => {
  
  data[monChoix].text = modifText;
  setData(data);
  setVisibleM(false);
};



const [visibleR, setVisibleR] = useState(false);

const showDialogR = () => {
  setVisibleR(true);
};

const annulerMotR = () => {
  setVisibleR(false);
};

const retirerMot = () => {
  
  data[monChoix].text = '';
  setData(data);
  setVisibleR(false);
};

  return(
    <View style={styles.principal}>


      <View style={styles.header}>
       
        <Text style={styles.title}>Projet SJP5</Text>
      </View>

     
      <View style={styles.body}>
        
        <View style={styles.left}>
          
          <View style={[styles.textContent, {borderColor: 'darkorchid',}]}>
            

          </View>

          <View style={styles.btnContent}>
           

            <View style={styles.btnView}>
            
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.center}>
          
          <View style={styles.centerBtnView1}>
             
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'dimgray'}}>{">>"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.centerBtnView2}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'dimgray'}}>{"<<"}</Text>
              </TouchableOpacity>
            </View>

        </View>

        <View style={styles.right}>
         
          <View style={[styles.textContent, {borderColor: 'darkorange',}, styles.flatListContainer]}>
            {/*Cette partie contient le code de la zone d'affichage du coté droit de l'application*/}

            {/* ici est le code de la flatlist */}
            <FlatList
              data={data}
              renderItem={renderItem}
            />
          </View>

          <View style={styles.btnContent}>
            
            <View style={styles.btnView}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={showDialog}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              
              <TouchableOpacity onPress={showDialogM}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton retirer*/}
              <TouchableOpacity onPress={showDialogR}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>

      

      <View style={styles.footer}>
       
        <Text style={styles.message}>Projet SJP5  </Text>
        <Text style={styles.message}>fait à Douala le 14 Novembre 2021</Text>
        <Text style={styles.message}>par NZODOM FRED ELTON  </Text>
        <Text style={styles.message}>Matricule: UN17P127SJ  </Text>
        <Text style={styles.message}>email: jnzodom@univ-catho-sjd.com</Text>

      </View>

      <Dialog.Container visible={visible}>
        <Dialog.Title>Ajouter un mot</Dialog.Title>
        <Dialog.Description>
          Ajouter votre mot ici.
        </Dialog.Description>
        <DialogInput 
          placeholder="votre mot ici!"
          onChangeText = {setMotTemp}
        />
        <Dialog.Button label="Annuler" onPress={annulerMot} />
        <Dialog.Button label="Ajouter" onPress={ajouterMot} />
      </Dialog.Container>


    <Dialog.Container visible={visibleM}>
        <Dialog.Title>Modifier un mot</Dialog.Title>
        <Dialog.Description>
          Modifier votre mot ici.
        </Dialog.Description>
        <DialogInput 
          // placeholder="votre mot ici!"
          onChangeText = {onChangeModifText}
          value={modifText}
        />
        <Dialog.Button label="Annuler" onPress={annulerMotM} />
        <Dialog.Button label="Modifier" onPress={modifierMot} />
    </Dialog.Container>

     
    <Dialog.Container visible={visibleR}>
        <Dialog.Title>Modifier un mot</Dialog.Title>
        <Dialog.Description>
          Voulez vous vraiment supprimer ce mot?
        </Dialog.Description>
        <Dialog.Button label="Non" onPress={annulerMotR} />
        <Dialog.Button label="OUi" onPress={retirerMot} />
    </Dialog.Container>
    </View>
  );
}




const styles = StyleSheet.create({



  principal: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'whitesmoke',
    flexDirection: "column"
  },

  
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 3,
    paddingLeft: 20,
    paddingRight: 20,
  },


  body: {
    flex: 8,
    flexDirection: "row",
  },
  right:{
    flex: 5,
  },
  center: {
    flex: 1.5,
  },
  left: {
    flex: 5,
  },
  flatListItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },



  textContent:{
    flex: 8,
    // borderColor: "blue",
    borderWidth: 2,
  },
  btnContent:{
    flex: 1,
    marginTop: 1,
    flexDirection: 'row'
  },
  btnView:{
    flex: 1,
    borderWidth: 1,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  centerBtnView1:{
    borderWidth: 1,
    margin: 1,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  centerBtnView2:{
    borderWidth: 1,
    margin: 1,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  item: {
    marginVertical: 1,
    marginHorizontal: 1,
  },

  footer: {
    flex: 0.8,
    paddingTop: 5,
    paddingLeft: 5,
  },
  message: {
    fontSize: 10,
    color: 'darkgray',
  },

});

export default AppTest;

