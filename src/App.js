import React, {useContext,useReducer} from 'react';
import logo from './logo.svg';
 import './App.css';
import {Greet} from './ComponentPractice/Greet'
import {GreetFromCLasscomp } from './ComponentPractice/GreetFromCLasscomp'
import {Welcome } from './ComponentPractice/Welcome'
import Counter  from './ComponentPractice/Counter';
import FuncClick from './ComponentPractice/functionClick';
import ChildComp from './ComponentPractice/childComponent'
import UserGreetings from './ComponentPractice/UsereGreetings'
import NameList from './ComponentPractice/NameList'
import Stylesheet from './ComponentPractice/Stylesheets'
import styles from './ComponentPractice/appStyles.module.css'
// import './ComponentPractice/myStyles.css'
import Form from './ComponentPractice/Form'
import LifecycleMountA from './ComponentPractice/LifecycleMountA'
import FragmentDemo from './ComponentPractice/FragmentDemo'
import ParentcComp from './ComponentPractice/ParentcComp'
import refscDemo from './ComponentPractice/refscDemo'
import focusinput from './ComponentPractice/focusinput'
import FRParentInput from './ComponentPractice/FRParentInput'
import ProtalsDemo from './ComponentPractice/ProtalsDEmo'
import ErrBHero from './ComponentPractice/ErrBHero'
import ErrorBoundary from './ComponentPractice/ErrorBoundary'
import clickComponent from './ComponentPractice/clickComponent'
import clickCountertwo from './ComponentPractice/clickCountertwo'
import HoverCountertwo from './ComponentPractice/HoverCountertwo'
import PostListHttp from './ComponentPractice/PostListHttp'
import PostrequestHttp from './ComponentPractice/PostrequestHttp'
import ObjectHook from './ComponentPractice/ObjectHook'
import CounterArrHooks from './ComponentPractice/CounterArrHooks'
import EffectHookCount from './ComponentPractice/EffectHookCount'
import ClassMouse from './ComponentPractice/ClassMouse'
import HookMouse from './ComponentPractice/HookMouse'
import MouseContainer from './ComponentPractice/MouseContainer'
import IntervalHookCounter from './ComponentPractice/IntervalHookCounter'
import DataFetchHttp from './ComponentPractice/DataFetchHttp'
import ReducerCounterOne from './ComponentPractice/ReducerCounterOne'
import ReducerCounterTwo from './ComponentPractice/ReducerCounterTwo'
import ReducerCounterThree from './ComponentPractice/ReducerCounterThree'
import ReduceWithContext from './ComponentPractice/ReduceWithContext'
import ReduceWithContextTwo from './ComponentPractice/ReduceWithContextTwo'
import ReducerDataFetchOne from './ComponentPractice/ReducerDataFetchOne'
 export const UserContext = React.createContext()
 export const ChannelContext = React.createContext()

export const countContext = React.createContext()

const initialState = 0;
const reducer = (state,action)=>{
  switch(action) {
      case 'increment': return state +1
      case 'decrement': return state -1
      case 'reset': return initialState
      default: return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
<countContext.Provider value={{countState: count, countDispatch:dispatch}}>

    <div className="App">
      <ReducerDataFetchOne />
      {/* Count in App {count} */}
       {/* <focusinput /> */}
  hii
{/* <ReduceWithContext /> */}
{/* <ReduceWithContextTwo /> */}
  {/* <ReducerCounterThree/> */}
  {/* <ReducerCounterTwo/> */}
  {/* <ReducerCounterOne /> */}
  {/* <UserContext.Provider value="Ratan">
    <ChannelContext.Provider value="COdingInAnything">
        <DataFetchHttp value="ratan"/>
</ChannelContext.Provider>
  </UserContext.Provider>
  */}
  {/* <IntervalHookCounter /> */}
  {/* <MouseContainer /> */}
  {/* <ClassMouse/> */}
  {/* <HookMouse /> */}
  {/* <EffectHookCount /> */}
  {/* <CounterArrHooks/> */}
  {/* <ObjectHook/> */}
  {/* <PostrequestHttp/> */}
  {/* <PostListHttp/> */}

  {/* <HoverCountertwo /> */}
    {/* <clickCountertwo /> */}
    {/* <clickComponent /> */}
    {/* <ErrorBoundary> */}
    {/* <ErrBHero HeroName="Ratan"/> */}
    {/* </ErrorBoundary> */}
    {/* <ErrBHero HeroName="Dina"/> */}
{/* <ErrorBoundary></ErrorBoundakry> */}
    {/* <ErrBHero HeroName="Joker"/> */}
 {/* <ErrorBoundary></ErrorBoundary> */}
    {/* <ErrBHero HeroName="Joker"/> */}


    {/* <ProtalsDemo /> */}
    {/* <FRParentInput /> */}
        {/* <focusinput /> */}
      {/* <refscDemo /> */}
        {/* <ParentcComp /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleMountA /> */}
     {/* <Form /> */}
      {/* Hello Ratan */}
      {/* <h3 className= 'error'>error rom mySTyles .css</h3> */}

      {/* <h3 className= {styles.success}>Successf rom module.css</h3> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreetings /> */}
      {/* <ChildComp /> */}
      {/* <FuncClick /> */}
      {/* <Counter/> */}
      {/* <Greet name="rtan" akname="SuperMan" children="RRRatan"/>
      <Welcome /> */}

    </div>
</countContext.Provider>

  );
}

export default App;
