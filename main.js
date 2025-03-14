/*
Copyright 2023 Certified CoderZ
Author: certifiedcoderz@gmail.com (Certified CoderZ)
License GNU General Public License v3.0
Description: BiZ9 Framework: Logic - Main
*/

//const moment = require('moment');
//const { get_date_time_pretty,get_date_str,get_date_time_str,get_month_title_short,get_date_time_obj,get_time_str } from 'biz9-utility';

const get_new_item_main = (data_type,id) => {
    if(!id){
        id=0;
    }
    return {data_type:data_type,id:id};
}
const get_cloud_url_main = (app_title_id,domain_url,port_id,action_url) =>{
    var app_title_id_url='?app_title_id='+app_title_id;
    return domain_url+":"+port_id+"/"+action_url+app_title_id_url;
}
/*
const get_data_config_main = (biz9_config,query) =>{
    if(biz9_config.SERVICE_HOST_TYPE == 'multiple'){
        biz9_config.APP_TITLE_ID=query.app_title_id;
    }
    return biz9_config;
}
*/
/*
const get_biz_item_main=(biz9_config,item,options) =>{
    //option
    //get_photo = true
    //get_date = true
    //get_count = true
    //get_biz_map = true
    //
    if(options.get_count){
        if(!item.view_count){
            item.view_count='0';
        }
        if(!item.like_count){
            item.like_count='0';
        }
        if(!item.review_count){
            item.review_count='0';
        }
    }
    //photo setting - start
    if(options.get_photo){
        //photo
        if(!item.photofilename){
            item.photofilename=null;
        }
        let no_photo_str='/images/no_image.png';
        let _photo_size_thumb='thumb_size_';
        let _photo_size_mid='mid_size_';
        let _photo_size_large='large_size_';
        let _photo_size_square_thumb='square_thumb_size_';
        let _photo_size_square_mid='square_mid_size_';
        let _photo_size_square_large='square_large_size_';
        item.photo_obj={
            album_url : (item.photofilename) ? biz9_config.PHOTO_URL+item.photofilename : no_photo_str,
            thumb_url : (item.photofilename) ? biz9_config.PHOTO_URL+_photo_size_thumb+item.photofilename : no_photo_str,
            mid_url   : (item.photofilename) ? biz9_config.PHOTO_URL+_photo_size_mid+item.photofilename : no_photo_str,
            large_url : (item.photofilename) ? biz9_config.PHOTO_URL+_photo_size_large+item.photofilename : no_photo_str,
            thumb_url : (item.photofilename) ? biz9_config.PHOTO_URL+_photo_size_thumb+item.photofilename : no_photo_str,
            square_thumb_url : (item.photofilename) ? biz9_config.PHOTO_URL+_photo_size_square_thumb+item.photofilename : no_photo_str,
            square_mid_url   : (item.photofilename) ? biz9_config.PHOTO_URL+_photo_size_square_thumb+item.photofilename : no_photo_str,
            square_large_url : (item.photofilename) ? biz9_config.PHOTO_URL+_photo_size_square_thumb+item.photofilename : no_photo_str,
        };
    }
    //photo setting - end
    //date setting - start
    if(options.get_date){
        let no_date_str='';
        if(!item.date_create){
            item.date_create= new moment().toISOString();
            item.date_save= new moment().toISOString();
        }
        item.date_obj={
            pretty_create: (item.date_create) ? get_date_time_pretty(item.date_create) : no_date_str,
            pretty_update: (item.date_create) ? get_date_time_pretty(item.date_save): no_date_str,
            full_date_create: (item.date_create) ? get_date_str(item.date_create) : no_date_str,
            full_date_update: (item.date_create) ? get_date_str(item.date_save) : no_date_str,
            full_date_time_create: (item.date_create) ? get_date_time_str(item.date_create) : no_date_str,
            full_date_time_update: (item.date_create) ? get_date_time_str(item.date_save) : no_date_str,
            month_create: (item.date_create) ? get_month_title_short(1+get_date_time_obj(item.date_create).month()) : no_date_str,
            month_update: (item.date_create) ? get_month_title_short(1+get_date_time_obj(item.date_save).month()) : no_date_str,
            mo_create: (item.date_create) ? (1+get_date_time_obj(item.date_create).month()) : no_date_str,
            mo_update: (item.date_create) ? (1+get_date_time_obj(item.date_save).month()) : no_date_str,
            date_create: (item.date_create) ? get_date_time_obj(item.date_create).date() : no_date_str,
            year_create: (item.date_create) ? get_date_time_obj(item.date_create).year() : no_date_str,
            year_update: (item.date_create) ? get_date_time_obj(item.date_save).year() : no_date_str,
            time_create: (item.date_create) ? get_time_str(item.date_create) : no_date_str,
            time_update: (item.date_create) ? get_time_str(item.date_save) : no_date_str,
        }
    }
    //date setting - end
    //biz_map setting - start
    if(options.get_biz_map){
        for(a=0;a<20;a++){
            if(item['field_'+a]){
                item[item['field_'+a]]=item['value_'+a];
            }
        }
    }
    //biz_map setting - end

    return item;
}
*/


export {
    get_new_item_main,
    get_cloud_url_main
    //get_data_config_main,
    //get_biz_item_main
};
