import {INCREMENT,DECREMENT} from "./constant";
import store from "./store";
export const createIncrementAction = (data) => ({type:INCREMENT,data})
export const createDecrementAction = (data) => ({type:DECREMENT,data})

//异步action需要返回一个函数,其中包含同步任务,reducer只认识对象所以需要先交给store处理,在store处理完函数拿到其中的同步任务,在交给reducer
export const createAsyncIncrement = (data,time) => {
    return ()=>{
        setTimeout(()=>{
            //异步任务执行完拿到同步action
            store.dispatch(createIncrementAction(data))
        },time)
    }
}
