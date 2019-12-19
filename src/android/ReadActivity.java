package pe.entel.cordova.plugin;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;




public class ReadActivity extends Activity {

    private Button btnSalir;
    private EditText txtValor;
    private String package_name;
	private Resources resources;
		
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);



		regresar("Lo logre");
    }


	


    private void regresar(String respuesta) {

        Intent i = new Intent();
        i.putExtra("respuesta", respuesta);
        setResult(Activity.RESULT_OK, i);
        finish();

    }
}
