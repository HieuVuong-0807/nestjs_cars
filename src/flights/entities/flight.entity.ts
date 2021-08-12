import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Flight {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    origin: string;
    
    @Column('text')
    destination: string;

    @Column('int')
    flightNumber: number;

    @Column('timestamp with time zone')
    depart: Date;

    @Column('timestamp with time zone')
    arrive: Date;

    @Column('boolean')
    nonstop: boolean;

}
