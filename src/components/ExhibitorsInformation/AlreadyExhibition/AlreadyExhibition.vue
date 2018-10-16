<template lang="html">
    <!-- 为何参展 -->
    <div >
        <div class="main">
            <b-container  :fluid="widthFluid">
                <b-row >
                    <b-col cols="12">
                        <headline :TitleName="TitleName"></headline>
                        
                    </b-col>
                    <b-col cols="12">
                        <p>{{data.desc}}</p>
                    </b-col>  
                    <b-col cols="12">

                            <b-form @submit="onSubmit">
                                <b-row>
                                    <b-col cols="12" md="6">
                                          <b-row>
                                            <b-col cols="12" >
                                                   
                                                  <b-form-group
                                                    label-for="Title"
                                                    label="称谓"
                                                    label-class="title-style"
                                                    >


                                                 <b-form-select  
                                                        id="Title"
                                                        v-model.trim="form.Title"
                                                        required
                                                        :options="options" >
                                                      <template slot="first">
                                                     
                                                        <option :value="null" disabled>-- 请选择称谓 --</option>
                                                      </template>
                                                     
                                                    
                                                    </b-form-select>
<!-- 
                                                    <b-form-input
                                                        id="Title"
                                                        type="text"
                                                        
                                                        
                                                        placeholder="请选择称谓（必填）">
                                                        
                                                    </b-form-input> -->
                                                </b-form-group> 
                                            </b-col>
                                             <b-col cols="12">
                                                  <b-form-group
                                                    label="姓"
                                                    class="title-style"
                                                    label-for="LastName">
                                                    <b-form-input
                                                        type="text"
                                                        v-model.trim="form.LastName"
                                                        required
                                                        placeholder="请填写您的姓（必填）"
                                                        id="LastName">
                                                        
                                                    </b-form-input>
                                                </b-form-group> 
                                            </b-col>    
                                            <b-col cols="12">
                                                  <b-form-group
                                                    label="名"
                                                    class="title-style"
                                                    label-for="FirstName">
                                                    <b-form-input
                                                        type="text"
                                                        v-model.trim="form.FirstName"
                                                        required
                                                        placeholder="请填写您的名（必填）"
                                                        id="FirstName">
                                                        
                                                    </b-form-input>
                                                </b-form-group> 
                                            </b-col>  
                                            <b-col cols="12">
                                                  <b-form-group
                                                    label="职务"
                                                    class="title-style"
                                                    label-for="JobTitle">
                                                    <b-form-input
                                                        type="text"
                                                        v-model.trim="form.JobTitle"
                                                        required
                                                        placeholder="请填写您的职务（必填）"
                                                        id="JobTitle">
                                                        
                                                    </b-form-input>
                                                </b-form-group> 
                                            </b-col>
                                            <b-col cols="12">
                                                  <b-form-group
                                                    label="公司名称（中文）"
                                                    class="title-style"
                                                    label-for="Company_cn">
                                                    <b-form-input
                                                        type="text"
                                                        v-model.trim="form.Company_cn"
                                                        required
                                                        placeholder="请填写公司名称（中文）（必填）"
                                                        id="Company_cn">
                                                        
                                                    </b-form-input>
                                                </b-form-group> 
                                            </b-col>
                                            <b-col cols="12">
                                                  <b-form-group
                                                    label="公司名称（英文）"
                                                    class="title-style"
                                                    label-for="Company_en">
                                                    <b-form-input
                                                        type="text"
                                                        v-model.trim="form.Company_en"
                                                        placeholder="请填写公司名称（英文）"
                                                        id="Company_en">
                                                        
                                                    </b-form-input>
                                                </b-form-group> 
                                            </b-col>
                                            <b-col cols="12">
                                                  <b-form-group
                                                    label="电子邮箱"
                                                    class="title-style"
                                                    label-for="Email">
                                                    <b-form-input
                                                        type="email"
                                                        v-model.trim="form.Email"
                                                        required
                                                        placeholder="请填写您的电子邮箱（必填）"
                                                        id="Email">
                                                        
                                                    </b-form-input>
                                                </b-form-group> 
                                            </b-col>
                                             <b-col cols="12">
                                                  <b-form-group
                                                    label="网址"
                                                    class="title-style"
                                                    label-for="Website">
                                                    <b-form-input
                                                        type="url"
                                                        v-model.trim="form.Website"
                                                        placeholder="请填写您的公司网址"
                                                        id="Website">
                                                        
                                                    </b-form-input>
                                                </b-form-group> 
                                            </b-col>
                                           
                                             <b-col cols="12">
                                                  <b-form-group
                                                    label="备注"
                                                    class="title-style"
                                                    label-for="Comments">
                                                   <b-form-textarea id="Comments"
                                                             v-model.trim="form.Comments"
                                                             placeholder="请填写您的备注"
                                                             :rows="5"
                                                             :max-rows="6">
                                                      </b-form-textarea>
                                                </b-form-group> 

                                                 
                                            </b-col>

                                        </b-row> 
                                    </b-col>
                                     <b-col cols="12" md="6">

                                          <b-row> 
                                                
                                                 <b-col cols="12">
                                                      <b-form-group
                                                        label="地址1 "
                                                        class="title-style"
                                                        label-for="Address_1">
                                                        <b-form-input
                                                            type="text"
                                                            v-model.trim="form.Address_1"
                                                            required
                                                            placeholder="请填写您的地址1（必填）"
                                                            id="Address_1">
                                                            
                                                        </b-form-input>
                                                    </b-form-group> 
                                                </b-col>
                                                 <b-col cols="12">
                                                      <b-form-group
                                                        label="地址2"
                                                        class="title-style"
                                                        label-for="Address_2">
                                                        <b-form-input
                                                            type="text"
                                                            v-model.trim="form.Address_2"
                                                            placeholder="请填写您的地址2"
                                                            id="Address_2">
                                                            
                                                        </b-form-input>
                                                    </b-form-group> 
                                                </b-col>
                                                 <b-col cols="12">
                                                      <b-form-group
                                                        label="地址3"
                                                        class="title-style"
                                                        label-for="Address_3">
                                                        <b-form-input
                                                            type="text"
                                                            v-model.trim="form.Address_3"
                                                            placeholder="请填写您的地址3"
                                                            id="Address_3">
                                                            
                                                        </b-form-input>
                                                    </b-form-group> 
                                                </b-col>
                                                 <b-col cols="12">
                                                      <b-form-group
                                                        label="国家/地区 "
                                                        class="title-style"
                                                        label-for="Country">
                                                        <b-form-input
                                                            type="text"
                                                            v-model.trim="form.Country"
                                                            required
                                                            placeholder="请填写您所在的国家/地区 （必填）"
                                                            id="Country">
                                                            
                                                        </b-form-input>
                                                    </b-form-group> 
                                                </b-col>
                                                  <b-col cols="12">
                                                      <b-form-group
                                                        label="省份 "
                                                        class="title-style"
                                                        label-for="CProvince_en">
                                                        <b-form-input
                                                            type="text"
                                                            v-model.trim="form.Province_en"
                                                            placeholder="请填写您所在的省份"
                                                            id="Province_en">
                                                            
                                                        </b-form-input>
                                                    </b-form-group> 
                                                </b-col>
                                                  <b-col cols="12">
                                                      <b-form-group
                                                        label="城市"
                                                        class="title-style"
                                                        label-for="City">
                                                        <b-form-input
                                                            type="text"
                                                            v-model.trim="form.City"
                                                            required
                                                            placeholder="请填写您所在的城市 （必填）"
                                                            id="City">
                                                            
                                                        </b-form-input>
                                                    </b-form-group> 
                                                </b-col>
                                                 <b-col cols="12">
                                                      <b-form-group
                                                        label="邮编"
                                                        class="title-style"
                                                        label-for="Postcode">
                                                        <b-form-input
                                                            type="text"
                                                            v-model.trim="form.Postcode"
                                                            placeholder="请填写您所在的城市邮编号"
                                                            id="Postcode">
                                                            
                                                        </b-form-input>
                                                    </b-form-group> 
                                                </b-col>
                                                <b-col cols="12">
                                                      <b-form-group
                                                        label="电话"
                                                        class="title-style"
                                                        label-for="Phone_3">
                                                        <b-form-input
                                                            type="tel"
                                                            v-model.trim="form.Phone_3"
                                                            required
                                                            placeholder="请填写您的电话 （必填）"
                                                            id="Phone_3">
                                                            
                                                        </b-form-input>
                                                    </b-form-group> 
                                                </b-col>
                                                 <b-col cols="12">
                                                      <b-form-group
                                                        label="传真"
                                                        class="title-style"
                                                        label-for="Fax_3">
                                                        <b-form-input
                                                            type="text"
                                                            v-model.trim="form.Fax_3"
                                                            placeholder="请填写您的传真"
                                                            id="Fax_3">
                                                            
                                                        </b-form-input>
                                                    </b-form-group> 
                                                </b-col>
                                                 <b-col cols="12">
                                                      <b-form-group
                                                        label="手机"
                                                        class="title-style"
                                                        label-for="Mobile">
                                                        <b-form-input
                                                            type="tel"
                                                            v-model.trim="form.Mobile"
                                                            placeholder="请填写您的手机"
                                                            id="Mobile">
                                                            
                                                        </b-form-input>
                                                    </b-form-group> 
                                                </b-col>


                                              
                                          </b-row>          
                                         
                                    </b-col>        
                                </b-row> 
                                <b-row>
                                    <b-col>
                                         <b-button type="submit" variant="primary">Submit</b-button>
                                         <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
                                    </b-col>    
                                </b-row>    
                                 
                            </b-form>    
                          
                    </b-col>  
                </b-row>
            </b-container>  
        </div>
          <div>
          <!--   <b-button @click="showModal">
              Open Modal
            </b-button> -->
            <b-modal ref="myModalRef" hide-footer >
              <div class="d-block text-center">
                <h3>注册已成功</h3>
              </div>
              <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
            </b-modal>
          </div>
     </div>
</template>

<script>
import headline  from '@/component/headline/headline'
import { mapGetters ,mapMutations } from 'vuex'
import {AlreadyExhibition} from "../../../assets/data/index.js"

export default {
    data(){
        return{
            data: AlreadyExhibition,
            form:{
                Title: null,
                LastName: '',
                FirstName: '',
                JobTitle: '',
                Company_cn:'',
                Company_en:'',
                Email:'',
                Website: '',
                Comments:'',
                Address_1:'',
                Address_2:'',
                Address_3:'',
                Country:'',
                Province_en:'',
                City:'',
                Postcode:'',
                Phone_3:'',
                Fax_3:'',
                Mobile:''
            },
            options:[
                {value: 'Mr' , text: '先生'},
                {value: 'Ms' , text: '女士'},
                {value: 'Mrss' , text: '小姐'},
            ]
        }
    },
    created(){
     
    },
    computed: {
        TitleName(){
            return this.data.name
        },
        ...mapGetters([
            'widthFluid'
            ])
    },
    methods:{
         ...mapMutations(['SCREEN_WIDTH']),
         onSubmit(evt){
            evt.preventDefault();
            console.log(JSON.stringify(this.form))
            this.$refs.myModalRef.show()
            this.form={
                Title: null,
                LastName: '',
                FirstName: '',
                JobTitle: '',
                Company_cn:'',
                Company_en:'',
                Email:'',
                Website: '',
                Comments:'',
                Address_1:'',
                Address_2:'',
                Address_3:'',
                Country:'',
                Province_en:'',
                City:'',
                Postcode:'',
                Phone_3:'',
                Fax_3:'',
                Mobile:''
            }
         },
         showModal () {
          this.$refs.myModalRef.show()
        },
        hideModal () {
          this.$refs.myModalRef.hide()
        }
    },
    components:{
        headline
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'

.title-style
    font-weight bold
</style>

