package pa.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD) //on class level
public @interface FunctionParsor {

    String createdBy() default "Unknown";

    String[] apiRoutes() default "none";

    String lastModified() default "03/01/2014";

    String description() default "";

}