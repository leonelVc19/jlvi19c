import React from "react";
import styles from "@/styles/Skill.module.css";
import Image from "next/image";

export default function SkillsCompornentsCards({title, image, url = ''}) {
    return (
        <p style={{color: 'red'}}>{title}</p>
    )
}