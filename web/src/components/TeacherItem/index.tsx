    import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';    
    import api from '../../Services/api';
       
    import React from 'react';
    import './styles.css'

    export interface Teacher {
        id: number,
            avatar: string,
            bio: string,
            cost: number,
            name: string,
            subject: string,
            whatsapp: string,
    }

     interface TeacherItemProps {
        teacher: Teacher,
            
        }
    




    


    const TeacherItem: React.FC<TeacherItemProps> =({ teacher }) => {
        function createNewConnection() {
            api.post('connections', {
                user_id: teacher.id,
            })
        }


    return (
    <article className="teacher-item">
    <header>
        <img src={teacher.avatar} alt={teacher.avatar}/>
            <div>
                <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
            </div>
    </header>
        <p>
        {teacher.bio}
        </p>
        <footer>
            <p>
                Preço/Hora
                <strong>{teacher.cost}</strong>
            </p>
            <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                <img src={whatsAppIcon} alt="WhatsApp"/>
                Entrar em contato
            </a>
        </footer>
    </article>
    )
    }

    export default TeacherItem