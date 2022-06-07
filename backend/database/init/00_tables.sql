--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: measurements; Type: TABLE; Schema: public; Owner: nexa-tracker
--

CREATE TABLE public.measurements (
    id uuid NOT NULL,
    node uuid,
    sensor uuid,
    "timestamp" timestamp with time zone,
    value numeric(8,2),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.measurements OWNER TO "nexa-tracker";

--
-- Name: nodes; Type: TABLE; Schema: public; Owner: nexa-tracker
--

CREATE TABLE public.nodes (
    id uuid NOT NULL,
    name text,
    "nexaId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.nodes OWNER TO "nexa-tracker";

--
-- Name: sensors; Type: TABLE; Schema: public; Owner: nexa-tracker
--

CREATE TABLE public.sensors (
    id uuid NOT NULL,
    name text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.sensors OWNER TO "nexa-tracker";

--
-- Name: trackers; Type: TABLE; Schema: public; Owner: nexa-tracker
--

CREATE TABLE public.trackers (
    id uuid NOT NULL,
    node uuid,
    sensor uuid,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.trackers OWNER TO "nexa-tracker";

--
-- Name: measurements measurements_pkey; Type: CONSTRAINT; Schema: public; Owner: nexa-tracker
--

ALTER TABLE ONLY public.measurements
    ADD CONSTRAINT measurements_pkey PRIMARY KEY (id);


--
-- Name: nodes nodes_pkey; Type: CONSTRAINT; Schema: public; Owner: nexa-tracker
--

ALTER TABLE ONLY public.nodes
    ADD CONSTRAINT nodes_pkey PRIMARY KEY (id);


--
-- Name: sensors sensors_pkey; Type: CONSTRAINT; Schema: public; Owner: nexa-tracker
--

ALTER TABLE ONLY public.sensors
    ADD CONSTRAINT sensors_pkey PRIMARY KEY (id);


--
-- Name: trackers trackers_pkey; Type: CONSTRAINT; Schema: public; Owner: nexa-tracker
--

ALTER TABLE ONLY public.trackers
    ADD CONSTRAINT trackers_pkey PRIMARY KEY (id);


--
-- Name: measurements measurements_node_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nexa-tracker
--

ALTER TABLE ONLY public.measurements
    ADD CONSTRAINT measurements_node_fkey FOREIGN KEY (node) REFERENCES public.nodes(id);


--
-- Name: measurements measurements_sensor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nexa-tracker
--

ALTER TABLE ONLY public.measurements
    ADD CONSTRAINT measurements_sensor_fkey FOREIGN KEY (sensor) REFERENCES public.sensors(id);


--
-- Name: trackers trackers_node_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nexa-tracker
--

ALTER TABLE ONLY public.trackers
    ADD CONSTRAINT trackers_node_fkey FOREIGN KEY (node) REFERENCES public.nodes(id);


--
-- Name: trackers trackers_sensor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nexa-tracker
--

ALTER TABLE ONLY public.trackers
    ADD CONSTRAINT trackers_sensor_fkey FOREIGN KEY (sensor) REFERENCES public.sensors(id);


--
-- PostgreSQL database dump complete
--

