import Vue from 'vue'
import Vuex from 'vuex'
import clone from "@/lib/clone"
import createId from '@/lib/createId'
import router from '@/router/index'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    recordList:[] ,
    tagList:[],
    currentTag:undefined,
    createTagError:null,
    createRecordError:null,
  }as RootState,

  mutations: {
    setCurrentTag(state,id:string){
      state.currentTag=state.tagList.filter(t => t.id === id)[0];
      
    },
    updateTag(state,object:{id:string,name:string}){
      const id =object.id
      const name = object.name
      const idList =state.tagList.map(item=>item.id)
      if(idList.indexOf(id)>=0){
          const names =state.tagList.map(item=> item.name)
          if(names.indexOf(name)>=0){
              window.alert('标签名重复')
          }else{
              const tag = state.tagList.filter(item=>item.id === id)[0];
              tag.name=name;
              store.commit('saveTags');
          }
      }
    },
    removeTag(state,id:string){
      let index =-1;
      for (let i=0;i<=state.tagList.length;i++){
          if(state.tagList[i].id===id){
            index=i;
            break;
          }     
      }
      if(index>=0){
        state.tagList.splice(index,1);
        store.commit('saveTags');
        router.back()
      }else{
        window.alert('删除失败')
      }
      
    },
    fetchRecords(state){
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') ||'[]') as RecordItem[];  
    },
    createRecord(state,record){
      const record2:RecordItem =clone(record);
      record2.createdAt= new Date().toISOString();
      state.recordList.push(record2);
      store.commit('saveRecords')
      //recordStore.saveRecords();
    },
    saveRecords(state){
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList))
    },
    fetchTags(state){
      state.tagList=JSON.parse(window.localStorage.getItem('tagList') ||'[]') ;
      if(!state.tagList||state.tagList.length===0){
      store.commit('createTag','三餐');
      store.commit('createTag','运动');
      store.commit('createTag','交通');
      store.commit('createTag','学习');
      store.commit('createTag','住房');
      store.commit('createTag','零食');
      store.commit('createTag','衣服');
      store.commit('createTag','话费');
      store.commit('createTag','日用');
      store.commit('createTag','娱乐');
      store.commit('createTag','咖啡');
      store.commit('createTag','奶茶');
      store.commit('createTag','礼物');
      store.commit('createTag','乐器');
      store.commit('createTag','买菜');
      store.commit('createTag','游戏');
      }
    },
    createTag(state,name:string){
      state.createTagError =null;
      const names =state.tagList.map(item => item.name)
      if(names.indexOf(name)>=0){
         state.createTagError= new Error('tag name duplicated')
         return;
      }
      const id = createId().toString();
      state.tagList.push({id,name:name});
      store.commit('saveTags');
      
    },
    saveTags(state){
      window.localStorage.setItem('tagList',JSON.stringify(state.tagList))
    },
  }
  
})

export default store;