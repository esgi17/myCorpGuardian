package pa.Models;

/**
 * <b> Classe Schedule contenant la configuration du planning </b>
 *
 * Cette classe construit un planning par défaut si le format du tableau donné n'est pas bon
 *
 * @author Robin Tersou
 * @version 1.0
 */
public class Schedule {

    /**
     * Tableau contenant les propriétés du planning
     */
    private int _globalSchedule[][];

    /**
     * Constructeur de l'objet Schedule
     *
     * @param schedule
     *                  Tableau contenant les propriétés du planning
     */
    public void Schedule(int[][] schedule) {
        /**
         * Vérification du tableau passé en paramètre
         */
        if( !checkSchedule(schedule) ) {
            /**
             * Si tableau non vérifié, création du tableau par défaut
             * et affectation.
             */
            this._globalSchedule = new int[][]{
                    {
                            ScheduleDefault.ON.get_value(),
                            ScheduleDefault.H_START.get_value(),
                            ScheduleDefault.H_END.get_value()
                    },
                    {
                            ScheduleDefault.ON.get_value(),
                            ScheduleDefault.H_START.get_value(),
                            ScheduleDefault.H_END.get_value()
                    },
                    {
                            ScheduleDefault.ON.get_value(),
                            ScheduleDefault.H_START.get_value(),
                            ScheduleDefault.H_END.get_value()
                    },
                    {
                            ScheduleDefault.ON.get_value(),
                            ScheduleDefault.H_START.get_value(),
                            ScheduleDefault.H_END.get_value()
                    },
                    {
                            ScheduleDefault.ON.get_value(),
                            ScheduleDefault.H_START.get_value(),
                            ScheduleDefault.H_END.get_value()
                    },
                    {
                            ScheduleDefault.OFF.get_value(),
                            ScheduleDefault.H_START.get_value(),
                            ScheduleDefault.H_END.get_value()
                    },
                    {
                            ScheduleDefault.OFF.get_value(),
                            ScheduleDefault.H_START.get_value(),
                            ScheduleDefault.H_END.get_value()
                    }
            };
        } else {
            /**
             * Si le tableau est vérifié, affection du tableau.
             */
            this._globalSchedule = schedule;
        }
    }

    /**
     * Récupération du planning
     * @return Tableau entier à deux dimensions contenant le planning
     */
    public int[][] get_globalSchedule() {
        return _globalSchedule;
    }

    /**
     * Modification du planning
     * @param _globalSchedule
     *                      Tableau contenant le planning
     */
    public void set_globalSchedule(int[][] _globalSchedule) {
        this._globalSchedule = _globalSchedule;
    }

    /**
     * Vérification de la structure et des valeurs du tableau de construction du planning
     * @param array
     * @return True si la configuration du tableau est correcte
     *         False sinon
     */
    private boolean checkSchedule(int[][] array) {
        int cpt1 = 0;
        int cpt2 = 0;

        if( array == null )
            return false;

        for( int[] a : array) {
            cpt1 += 1;
            for( int i : a ) {
                cpt2 += 1;
            }

            if( cpt2 != 3 )
                return false;

        }
        if( cpt1 != 7 )
            return false;

        return true;
    }


}
