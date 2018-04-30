package pa.Model;

/**
 * <b>User est la classe représentant un utilisateur.</b>
 *
 *     Un User est un utilisateur des systèmes de sécurité mis en place (employé, visiteur, administrateur).
 *     Un User est caractérisé par les informations suivantes :
 *     <ul>
 *         <li> Un nom de famille </li>
 *         <li> Un prénom </li>
 *         <li> Une date de naissance </li>
 *         <li> L'id de son groupe </li>
 *     </ul>
 *
 * @author Robin Tersou
 * @version 1.0
 *
 */
public class User {
    /**
     * Le prénom du "User"
     */
    private String _firstname;

    /**
     * Le nom du "User"
     */
    private String _lastname;

    /**
     * L'id du groupe attribué au "User"
     */
    private Integer _idGroup;

    /**
     * La date de naissance du "User"
     */
    private String _birthdate;

    /**
     * Constructeur de l'objet User
     *
     * @param firstname
     *                  Prénom du User
     * @param lastname
     *                  Nom de famille du User
     * @param idGroup
     *                  Id du groupe du User
     */
    public void User( String firstname, String lastname, Integer idGroup) {
        this._firstname = firstname;
        this._lastname = lastname;

        // Attribution du groupe par défaut si idGroup null
        if( idGroup == null ) {
            this._idGroup = 0;
        } else {
            this._idGroup = idGroup;
        }
    }

    /**
     * Getter : Récupération de la date de naissance
     * @return La date de naissance du User
     */
    public String get_birthdate() {
        return _birthdate;
    }

    /**
     * Setter : Modification de la date de naissance
     * @param _birthdate
     *                   Date de naissance du User
     */
    public void set_birthdate(String _birthdate) {
        this._birthdate = _birthdate;
    }

    /**
     * Getter : Récupération du prénom
     * @return Le prénom du User
     */
    public String getFirstname() {
        return _firstname;
    }

    /**
     * Setter : Modification du prénom
     *
     * @param firstname
     *                  Prénom du User
     */
    public void setFirstname(String firstname) {
        this._firstname = firstname;
    }

    /**
     * Getter : Récupération du nom de famille
     *
     * @return Le nom de famille du User
     */
    public String getLastname() {
        return _lastname;
    }

    /**
     * Setter : Modification du nom de famille
     * @param lastname
     *                  Le nom de de famille du User
     */
    public void setLastname(String lastname) {
        this._lastname = lastname;
    }

    /**
     * Getter : Récpération de l'id du groupe attribué
     * @return L'id du groupe attribué au User
     */
    public Integer getIdGroup() {
        return _idGroup;
    }

    /**
     * Setter : Attribution d'un groupe au User
     * @param idGroup
     *                  Id du groupe
     */
    public void setIdGroup(Integer idGroup) {
        this._idGroup = idGroup;
    }
}
