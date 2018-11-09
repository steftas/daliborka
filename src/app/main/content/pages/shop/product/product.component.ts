import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {GlobalStore} from '../../../../../global-store/global-store';
import {ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
	numOfProduct = 1;
	product = {
		id: 0,
		name: 'Čaj Ljuvej Fohow',
		price: 50,
		shortDesc: 'Čaj Puer pomaže organizmu u apsorbovanju hrane u želucu, poboljšava probavu i sprečava taloženje holesterola i triglicirida i stvaranje celulita u organizmu.',
		imgUrl: '/assets/images/products/ljuvej.jpg',
		desc: [
			{
				label: 'Opis proizvoda',
				text: '<p><span>Zeleni čaj&nbsp; Puer je poznat u Kini jo&scaron; pre oko hiljadu godina, ali je danas stekao popularnost među drugim vrstama i sortama čaja. Zeleni čaj Puer je unikatan i jedinstven, jer ima jako antioksidantno delovanje i pozitivno deluje na detoksikaciju i jačanje imuniteta.</span></p><p><span>Cena zelenog čaja Puer raste sa staro&scaron;ću i na čajnim aukcijama može dostići nekoliko hiljada dolara za kotur čaja. Zeleni Čaj Puer se koristi u celom svetu. </span>Ima svoje potro&scaron;ače i van Kine i Azije. Veliki broj ljudi iz Amerike i Evrope su ljubitelji čaja Puer.<span> Čaj Puer pomaže organizmu u apsorbovanju hrane u želucu, pobolj&scaron;ava probavu i sprečava taloženje holesterola i triglicirida i stvaranje celulita u organizmu. Deluje preventivno kod oboljenja karcinoma. </span></p><p><span>Redovno uzimanje zelenog čaja Ljuvej FOHOW pomaže kod regulisanja visokog i niskog pritiska, deluje na smanjenje holesterola u krvi, obnavlja životnu energiju -imunitet, efikasan je diuretik, ima pozitivno kozmetičko delovanje kao antioksidant.</span></p><p><span>Uz pomoć zelenog čaja Puer  može se lečiti alkoholizam i zavisnost od cigareta uz primenu kapsula Linčži i kalcijuma Haicao Gaj.</span></p>'
			},
			{
				label: 'Uzroci nastanka poremećaja',
				text: '<p>Neki ljudi zdravlje vide u ishrani sa visoko kaloričnim namernicama, tro&scaron;eći svakodnevno mnogo mesa, testa, &scaron;ećera i drugu kaloričnu hranu. Obilna ishrana opterećuje funkciju želudca, jetre, creva i pankreasa.&nbsp;</p><p>Visoko kalorična ishrana dovodi do karcinoma debelog creva i mlečnih žlezda i direktno utiče na taloženje kamenja u žuči i masnoće u jetri. Ako u toku dana redovno uzimate čaj Ljuvej, to će znatno pomoći da se smanji količina masnoće koju je apsorbovao organizam i u isto vreme će preventivno delovati kod vaskularnih bolesti srca i mozga, dijabetesa i drugih bolesti.</p><p>Hrana sa visokim sadržajem masnoće može dovesti do hiperglikemije pankreasa i jetre &scaron;to predstavlja uzrok ateroskleroze. Ateroskleroza, može izazvati bolesti krvnih sudova srca i mozga.</p>'
			},
			{
				label: 'Delovanje',
				text: '<p>Čaj se ne tretira kao lek, ali su u praksi poznati slučajevi kada je čaj pomogao da se telo oslobodi zavisnosti. Pozitivno stimuli&scaron;e centralni nervni sistem, ublažava dejstvo nikotina i zaustavlja proces starenja.</p><p>Pozitivno deovanje čaja:</p><ul><li>preventivno deluje kod ateroskleroze i koronarnih bolesti</li><li>pomaže detoksikaciji organizma</li><li>deluje kao dobar diuretik</li><li>normalizuje rad želuca</li><li>pomaže smanjenju telesne težine</li><li>reguli&scaron;e krvni pritisak</li><li>pomaže kod pobolj&scaron;anja vida</li><li>deluje preventivno kod oboljenja karcinoma</li><li>deluje na smirivanje raznih upala</li><li>preventivno deluje kod stvaranja karijesa.</li></ul><p>Čaj Ljuvej - pomaže da se smanji masnoća i nivo &scaron;ečera u krvi jer sprečava  taloženje masnih naslaga i stvaranje celulita. Izbacuje soli te&scaron;kih metala, otklanja posledice radijacije izbacivanjem toksina iz tela.</p>'
			},
			{
				label: 'Priprema',
				text: '<address>Kada 1,5 l vode proključa skloniti je sa vatre da odstoji 2-3 min. da ključ padne i temperatura je tada 70-80&deg;C. Ubacite&nbsp; kesicu čaja&nbsp; da odstoji u vodi 5-7min. Kesicu čaja možete iskoristiti u ishrani kao dodatak - u salati ( pome&scaron;ati sa jogurtom ) ili je dodati cveću kao đubrivo. Uјutru skuvati čaj. Za osobe sa visokim pritiskom sipati u termos i piti topao čaj, a za osobe sa niskim i normalnim pritiskom piti hladan čaj.</address><address>Preporučuje se da se čaj Ljuvej Fohow kao terapija koristi najmanje tri meseca. Kod hroničnih oboljenja može se piti i duži vremenski period. Čaj Puer savr&scaron;eno doprinosi mr&scaron;avljenju, izbacuje vi&scaron;ak vode iz organizma. Njega možete piti i pre treninga, za vreme ispita i tokom vožnje. Ako popijete samo jedan termos skuvanog Puer čaja u toku dana Vi ćete osetiti ogroman priliv energije, vedrine, imaćete vi&scaron;e elana za rad.</address><address>Blagotvorno delovanje čaja je primećeno kada ga koriste svi članovi&nbsp; porodice. U porodici se stvara harmonija zahvaljujući prisustvu kordicepsa u čaju koji ima jako delovanje na funkcionalnom i energetskog nivou u organizmu, samim tim je manje napetosti i većeg mira i harmonije u porodici.</address><address><strong>Napomena</strong>: Pre upotrebe preparata na bazi kordicepsa ili drugih preparata iz ove palete proizvoda za či&scaron;ćenje organizma preporučuje se da koristite čaj Ljuvej FOHOW.</address><address>Čaj nije poželjno piti nakon 17 sati, jer Vam može poremeti san zbog jakog еnergetskog potencijala kordicepsa. Standardno pakovanje: 25 kesica čaja po 2g. Čuvati na suvom, tamnom i hladnom mestu na sobnoj tempetaruri do 23◦C.</address><address>Kod dužeg kori&scaron;čenja čaj ne izaziva nikakve nus pojave i neprijatne reakcije. Čaj Ljuvej FOHOW se ne tretira kao lek, nego kao dodatak u ishrani.</address><address>Za sve &scaron;to nije precizirano u uputstvima o upotrebi preparata potrebno je da nas nazovete i da se konsultujete sa konsultantom kompanije Fohow - Anabelom Florom&nbsp; na telefon 021/510-007</address>'
			}
		]
	}

	constructor(
		public dialog: MatDialog,
		private globalStore: GlobalStore
	) { }

	ngOnInit() {
		console.log(this.globalStore.cart);
	}

	onQantity(isAdd) {
		if (isAdd) {
			this.numOfProduct++;
		} else {
			if (this.numOfProduct === 1) {
				this.numOfProduct = 1;
			} else {
				this.numOfProduct--;
			}
		}
	}

	addItemToCart() {
		const item = {
			product: this.product,
			quantity: this.numOfProduct
		}

		if (this.globalStore['cart']['items'].length === 0) {
			this.globalStore['cart']['items'].push(item);
		} else {
			let isInCart = false;
			this.globalStore['cart']['items'].forEach((elem) => {
				if (elem.product.id === this.product.id) {
					elem.quantity = elem.quantity + item.quantity
					isInCart = true;
				}
			});

			if(!isInCart) {
				this.globalStore['cart']['items'].push(item);
			}
		}

		this.globalStore['cart']['totalPrice'] = 0;
		this.globalStore['cart']['items'].forEach((elem) => {
			this.globalStore['cart']['totalPrice'] = this.globalStore['cart']['totalPrice'] + (elem['quantity'] * elem['product']['price']);
		});

		localStorage.setItem('cart', JSON.stringify(this.globalStore['cart']));

		const dialogRef = this.dialog.open(InformDialog, {
	      	width: '450px'
	    });
	}
}

@Component({
  selector: 'inform-dialog',
  template: `
	<div mat-dialog-content style="text-align: center;">
  		<p>Uspešno ste dodali proizvod u korpu.</p>
	</div>
	<div mat-dialog-actions style="text-align: center;">
  		<button mat-raised-button color="accent" (click)="this.dialogRef.close()" >OK</button>
	</div>`
})
export class InformDialog {

  	constructor(
    	public dialogRef: MatDialogRef<any>
    ) {}
}
