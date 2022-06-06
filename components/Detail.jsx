import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Information from './Information'
import Comics from './Comics'
import apiParams from '../config';
const Tab = createBottomTabNavigator();

export default function Detail(){
    const [isLoading, setLoading] = React.useState(true)
    const [data, setData] = React.useState([]);
    const {ts, apikey,hash,baseURL} = apiParams;
    React.useEffect(() => {
        axios.get(`${baseURL}/v1/public/characters/${route.params.id}`,{
            params:{
                ts,
                apikey,
                hash
            }
        })
        .then(response => setData(response.data.data.results[0]))
        .catch
    })
    return(
        <Tab.Navigator
            initialRouteName='Information'
            tabBarOptions={{
                activeTinitColor: "darkred"
            }}
        >
            <Tab.Screen
                name='Information'
                component={Information}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name='inofrmation-circle' color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name='Comics'
                component={Comics}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name='book' color={color} size={size}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}