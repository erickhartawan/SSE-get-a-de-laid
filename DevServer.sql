PGDMP                     	    z            postgres    14.5    14.5                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    14020    postgres    DATABASE     S   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE postgres;
                postgres    false                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            �            1259    16401    userauthentication    TABLE       CREATE TABLE public.userauthentication (
    user_authentication_unique_id uuid NOT NULL,
    user_authentication_phone boolean DEFAULT false NOT NULL,
    "user" boolean DEFAULT false NOT NULL,
    user_email_authentication boolean DEFAULT false NOT NULL
);
 &   DROP TABLE public.userauthentication;
       public         heap    postgres    false            �            1259    16394    userdetails    TABLE       CREATE TABLE public.userdetails (
    user_unique_id uuid NOT NULL,
    user_first_name character(20) NOT NULL,
    user_last_name character(20) NOT NULL,
    user_age integer NOT NULL,
    user_phone bigint,
    user_email character varying(100) NOT NULL,
    user_country character(30) NOT NULL,
    user_gender character(15) NOT NULL,
    user_language "char"[],
    user_vaccine_status boolean[],
    user_password text NOT NULL,
    user_dp_link text NOT NULL,
    user_last_login_time_stamp timestamp with time zone
);
    DROP TABLE public.userdetails;
       public         heap    postgres    false            �            1259    16422    userimagestorage    TABLE     ~   CREATE TABLE public.userimagestorage (
    user_image_id uuid NOT NULL,
    user_image_img bytea,
    user_image_link text
);
 $   DROP TABLE public.userimagestorage;
       public         heap    postgres    false            �            1259    16412    userprofile    TABLE       CREATE TABLE public.userprofile (
    user_profile_unique_id uuid NOT NULL,
    user_profile_unique_user_name "char" NOT NULL,
    user_profile_age integer NOT NULL,
    user_profile_bio text,
    user_profile_interests "char"[],
    user_profile_images text[]
);
    DROP TABLE public.userprofile;
       public         heap    postgres    false            v           2606    16400    userdetails UserDetails_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.userdetails
    ADD CONSTRAINT "UserDetails_pkey" PRIMARY KEY (user_unique_id);
 H   ALTER TABLE ONLY public.userdetails DROP CONSTRAINT "UserDetails_pkey";
       public            postgres    false    210            y           2606    16427    userimagestorage user_image_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.userimagestorage
    ADD CONSTRAINT user_image_id FOREIGN KEY (user_image_id) REFERENCES public.userdetails(user_unique_id) NOT VALID;
 H   ALTER TABLE ONLY public.userimagestorage DROP CONSTRAINT user_image_id;
       public          postgres    false    213    3446    210            x           2606    16417 "   userprofile user_profile_unique_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.userprofile
    ADD CONSTRAINT user_profile_unique_id FOREIGN KEY (user_profile_unique_id) REFERENCES public.userdetails(user_unique_id) MATCH FULL;
 L   ALTER TABLE ONLY public.userprofile DROP CONSTRAINT user_profile_unique_id;
       public          postgres    false    3446    212    210            w           2606    16407 !   userauthentication user_unique_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.userauthentication
    ADD CONSTRAINT user_unique_id FOREIGN KEY (user_authentication_unique_id) REFERENCES public.userdetails(user_unique_id);
 K   ALTER TABLE ONLY public.userauthentication DROP CONSTRAINT user_unique_id;
       public          postgres    false    3446    210    211           