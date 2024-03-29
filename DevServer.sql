PGDMP     5    !            
    z           postgres    15.0    15.0                 0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            !           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            "           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            #           1262    5    postgres    DATABASE     j   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE postgres;
                postgres    false            $           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3619                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            %           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    16461    userchatroom    TABLE     �   CREATE TABLE public.userchatroom (
    userchatroom_messageid bigint NOT NULL,
    userchatroom_senderid uuid NOT NULL,
    userchatroom_receiverid uuid NOT NULL,
    userchatroom_message text,
    userchatroom_timestamp timestamp with time zone
);
     DROP TABLE public.userchatroom;
       public         heap    postgres    false            �            1259    16506 	   userchats    TABLE       CREATE TABLE public.userchats (
    userchats_id uuid NOT NULL,
    userchats_other_id uuid NOT NULL,
    userchats_other_dp_image text,
    userchats_firstname character varying(30),
    userchats_lastname character varying(30),
    userchats_lastmessage text
);
    DROP TABLE public.userchats;
       public         heap    postgres    false            �            1259    16400    userdetails    TABLE     i  CREATE TABLE public.userdetails (
    user_unique_id uuid NOT NULL,
    user_first_name character(20) NOT NULL,
    user_last_name character(20) NOT NULL,
    user_age integer NOT NULL,
    user_phone bigint,
    user_email character varying(100) NOT NULL,
    user_country text NOT NULL,
    user_gender character varying(7) NOT NULL,
    user_password text NOT NULL,
    user_dp_link text NOT NULL,
    user_last_login_time_stamp timestamp with time zone,
    user_language text[],
    user_authenticated boolean DEFAULT false NOT NULL,
    user_vaccine_status text[] DEFAULT ARRAY['false'::text, 'false'::text]
);
    DROP TABLE public.userdetails;
       public         heap    postgres    false            �            1259    16405    userimagestorage    TABLE     ~   CREATE TABLE public.userimagestorage (
    user_image_id uuid NOT NULL,
    user_image_img bytea,
    user_image_link text
);
 $   DROP TABLE public.userimagestorage;
       public         heap    postgres    false            �            1259    16410    userprofile    TABLE     h  CREATE TABLE public.userprofile (
    user_profile_unique_id uuid NOT NULL,
    user_profile_unique_user_name character varying(20) NOT NULL,
    user_profile_age integer NOT NULL,
    user_profile_bio text,
    user_profile_images text[],
    user_profile_interests text[],
    user_profile_travel_interests text[],
    user_profile_dp_image text NOT NULL
);
    DROP TABLE public.userprofile;
       public         heap    postgres    false           