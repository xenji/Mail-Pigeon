/*
 * Copyright (C) 2011-2012 trivago GmbH <mario.mueller@trivago.com>, <christian.krause@trivago.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 Highcharts JS v2.1.2 (2011-01-12)

 (c) 2009-2010 Torstein H?nsi

 License: www.highcharts.com/license
 */
(function()
{
	function ma(a, b)
	{
		a || (a = {});
		for (var c in b)
		{
			a[c] = b[c];
		}
		return a
	}

	function oa(a, b)
	{
		return parseInt(a, b || 10)
	}

	function Ib(a)
	{
		return typeof a == "string"
	}

	function Jb(a)
	{
		return typeof a == "object"
	}

	function bc(a)
	{
		return typeof a == "number"
	}

	function mc(a, b)
	{
		for (var c = a.length; c--;)
		{
			if (a[c] == b)
			{
				a.splice(c, 1);
				break
			}
		}
	}

	function L(a)
	{
		return a !== Qa && a !== null
	}

	function xa(a, b, c)
	{
		var d,e;
		if (Ib(b))
		{
			if (L(c))
			{
				a.setAttribute(b, c);
			}
			else
			{
				if (a && a.getAttribute)
				{
					e = a.getAttribute(b)
				}
			}
		} else if (L(b) && Jb(b))
		{
			for (d in b)
			{
				a.setAttribute(d,
						b[d]);
			}
		}
		return e
	}

	function nc(a)
	{
		if (!a || a.constructor != Array)
		{
			a = [a];
		}
		return a
	}

	function y()
	{
		var a = arguments,b,c,d = a.length;
		for (b = 0; b < d; b++)
		{
			c = a[b];
			if (typeof c !== "undefined" && c !== null)
			{
				return c
			}
		}
	}

	function Vd(a)
	{
		var b = "",c;
		for (c in a)
		{
			b += Ad(c) + ":" + a[c] + ";";
		}
		return b
	}

	function La(a, b)
	{
		if (Ac)
		{
			if (b && b.opacity !== Qa)
			{
				b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
			}
		}
		ma(a.style, b)
	}

	function eb(a, b, c, d, e)
	{
		a = za.createElement(a);
		b && ma(a, b);
		e && La(a, {padding:0,border:mb,margin:0});
		c && La(a, c);
		d && d.appendChild(a);
		return a
	}

	function Kb(a, b)
	{
		Bc = y(a, b.animation)
	}

	function Bd()
	{
		var a = Ra.global.useUTC;
		Cc = a ? Date.UTC : function(b, c, d, e, f, g)
		{
			return(new Date(b, c, y(d, 1), y(e, 0), y(f, 0), y(g, 0))).getTime()
		};
		$c = a ? "getUTCMinutes" : "getMinutes";
		ad = a ? "getUTCHours" : "getHours";
		bd = a ? "getUTCDay" : "getDay";
		oc = a ? "getUTCDate" : "getDate";
		Dc = a ? "getUTCMonth" : "getMonth";
		Ec = a ? "getUTCFullYear" : "getFullYear";
		Cd = a ? "setUTCMinutes" : "setMinutes";
		Dd = a ? "setUTCHours" : "setHours";
		cd = a ? "setUTCDate" : "setDate";
		Ed = a ? "setUTCMonth" : "setMonth";
		Fd = a ? "setUTCFullYear" : "setFullYear"
	}

	function Fc(a)
	{
		Gc ||
		(Gc = eb(Lb));
		a && Gc.appendChild(a);
		Gc.innerHTML = ""
	}

	function wb(a, b)
	{
		var c = function()
		{
		};
		c.prototype = new a;
		ma(c.prototype, b);
		return c
	}

	function Gd(a, b, c, d)
	{
		var e = Ra.lang;
		a = a;
		var f = isNaN(b = ab(b)) ? 2 : b;
		b = c === undefined ? e.decimalPoint : c;
		d = d === undefined ? e.thousandsSep : d;
		e = a < 0 ? "-" : "";
		c = oa(a = ab(+a || 0).toFixed(f)) + "";
		var g = (g = c.length) > 3 ? g % 3 : 0;
		return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + ab(a - c).toFixed(f).slice(2) : "")
	}

	function Hc()
	{
	}

	function Hd(a, b)
	{
		function c(m, h)
		{
			function x(l, p)
			{
				this.pos = l;
				this.minor = p;
				this.isNew = true;
				p || this.addLabel()
			}

			function w(l)
			{
				if (l)
				{
					this.options = l;
					this.id = l.id
				}
				return this
			}

			function P()
			{
				var l = [],p = [],r;
				Sa = v = null;
				Y = [];
				t(Aa, function(o)
				{
					r = false;
					t(["xAxis","yAxis"], function(ja)
					{
						if (o.isCartesian && (ja == "xAxis" && ka || ja == "yAxis" && !ka) && (o.options[ja] == h.index || o.options[ja] === Qa && h.index === 0))
						{
							o[ja] = s;
							Y.push(o);
							r = true
						}
					});
					if (!o.visible && u.ignoreHiddenSeries)
					{
						r = false;
					}
					if (r)
					{
						var U,X,H,C,fa;
						if (!ka)
						{
							U = o.options.stacking;
							Ic = U == "percent";
							if (U)
							{
								C = o.type + y(o.options.stack,
										"");
								fa = "-" + C;
								o.stackKey = C;
								X = l[C] || [];
								l[C] = X;
								H = p[fa] || [];
								p[fa] = H
							}
							if (Ic)
							{
								Sa = 0;
								v = 99
							}
						}
						if (o.isCartesian)
						{
							t(o.data, function(ja)
							{
								var D = ja.x,la = ja.y,S = la < 0,Z = S ? H : X;
								S = S ? fa : C;
								if (Sa === null)
								{
									Sa = v = ja[I];
								}
								if (ka)
								{
									if (D > v)
									{
										v = D;
									}
									else
									{
										if (D < Sa)
										{
											Sa = D
										}
									}
								} else if (L(la))
								{
									if (U)
									{
										Z[D] = L(Z[D]) ? Z[D] + la : la;
									}
									la = Z ? Z[D] : la;
									ja = y(ja.low, la);
									if (!Ic)
									{
										if (la > v)
										{
											v = la;
										} else if (ja < Sa)
										{
											Sa = ja;
										}
									}
									if (U)
									{
										ca[S] || (ca[S] = {});
										ca[S][D] = {total:la,cum:la}
									}
								}
							});
							if (/(area|column|bar)/.test(o.type) && !ka)
							{
								if (Sa >= 0)
								{
									Sa = 0;
									Id = true
								} else if (v < 0)
								{
									v = 0;
									Jd = true
								}
							}
						}
					}
				})
			}

			function ga(l, p)
			{
				var r;
				Db = p ? 1 : Ta.pow(10, Mb(Ta.log(l) / Ta.LN10));
				r = l / Db;
				if (!p)
				{
					p = [1,2,2.5,5,10];
					if (h.allowDecimals === false)
					{
						if (Db == 1)
						{
							p = [1,2,5,10];
						} else if (Db <= 0.1)
						{
							p = [1 / Db]
						}
					}
				}
				for (var o = 0; o < p.length; o++)
				{
					l = p[o];
					if (r <= (p[o] + (p[o + 1] || p[o])) / 2)
					{
						break
					}
				}
				l *= Db;
				return l
			}

			function M(l)
			{
				var p;
				p = l;
				if (L(Db))
				{
					p = (Db < 1 ? V(1 / Db) : 1) * 10;
					p = V(l * p) / p
				}
				return p
			}

			function da()
			{
				var l,p,r,o,U = h.tickInterval,X = h.tickPixelInterval;
				l = h.maxZoom || (ka ? nb(m.smallestInterval * 5, v - Sa) : null);
				B = O ? Ca : ra;
				if (Nb)
				{
					r = m[ka ? "xAxis" : "yAxis"][h.linkedTo];
					o = r.getExtremes();
					J = y(o.min,
							o.dataMin);
					Q = y(o.max, o.dataMax)
				}
				else
				{
					J = y(na, h.min, Sa);
					Q = y(Ma, h.max, v)
				}
				if (Q - J < l)
				{
					o = (l - Q + J) / 2;
					J = Ga(J - o, y(h.min, J - o), Sa);
					Q = nb(J + l, y(h.max, J + l), v)
				}
				if (!bb && !Ic && !Nb && L(J) && L(Q))
				{
					l = Q - J || 1;
					if (!L(h.min) && !L(na) && Wb && (Sa < 0 || !Id))
					{
						J -= l * Wb;
					}
					if (!L(h.max) && !L(Ma) && Kd && (v > 0 || !Jd))
					{
						Q += l * Kd
					}
				}
				Ua = J == Q ? 1 : Nb && !U && X == r.options.tickPixelInterval ? r.tickInterval : y(U, bb ? 1 : (Q - J) * X / B);
				if (!N && !L(h.tickInterval))
				{
					Ua = ga(Ua);
				}
				s.tickInterval = Ua;
				Jc = h.minorTickInterval === "auto" && Ua ? Ua / 5 : h.minorTickInterval;
				if (N)
				{
					pa = [];
					U = Ra.global.useUTC;
					var H = 1E3 / ob,C = 6E4 / ob,fa = 36E5 / ob;
					X = 864E5 / ob;
					l = 6048E5 / ob;
					o = 2592E6 / ob;
					var ja = 31556952E3 / ob,D = [
						["second",H,[1,2,5,10,15,30]],
						["minute",C,[1,2,5,10,15,30]],
						["hour",fa,[1,2,3,4,6,8,12]],
						["day",X,[1,2]],
						["week",l,[1,2]],
						["month",o,[1,2,3,4,6]],
						["year",ja,null]
					],la = D[6],S = la[1],Z = la[2];
					for (r = 0; r < D.length; r++)
					{
						la = D[r];
						S = la[1];
						Z = la[2];
						if (D[r + 1])
						{
							if (Ua <= (S * Z[Z.length - 1] + D[r + 1][1]) / 2)
							{
								break
							}
						}
					}
					if (S == ja && Ua < 5 * S)
					{
						Z = [1,2,5];
					}
					D = ga(Ua / S, Z);
					Z = new Date(J * ob);
					Z.setMilliseconds(0);
					if (S >= H)
					{
						Z.setSeconds(S >= C ? 0 : D * Mb(Z.getSeconds() /
								D));
					}
					if (S >= C)
					{
						Z[Cd](S >= fa ? 0 : D * Mb(Z[$c]() / D));
					}
					if (S >= fa)
					{
						Z[Dd](S >= X ? 0 : D * Mb(Z[ad]() / D));
					}
					if (S >= X)
					{
						Z[cd](S >= o ? 1 : D * Mb(Z[oc]() / D));
					}
					if (S >= o)
					{
						Z[Ed](S >= ja ? 0 : D * Mb(Z[Dc]() / D));
						p = Z[Ec]()
					}
					if (S >= ja)
					{
						p -= p % D;
						Z[Fd](p)
					}
					S == l && Z[cd](Z[oc]() - Z[bd]() + h.startOfWeek);
					r = 1;
					p = Z[Ec]();
					H = Z.getTime() / ob;
					C = Z[Dc]();
					for (fa = Z[oc](); H < Q && r < Ca;)
					{
						pa.push(H);
						if (S == ja)
						{
							H = Cc(p + r * D, 0) / ob;
						} else if (S == o)
						{
							H = Cc(p, C + r * D) / ob;
						} else if (!U && (S == X || S == l))
						{
							H = Cc(p, C, fa + r * D * (S == X ? 1 : 7));
						}
						else
						{
							H += S * D;
						}
						r++
					}
					pa.push(H);
					Kc = h.dateTimeLabelFormats[la[0]]
				}
				else
				{
					r = Mb(J / Ua) *
							Ua;
					p = dd(Q / Ua) * Ua;
					pa = [];
					for (r = M(r); r <= p;)
					{
						pa.push(r);
						r = M(r + Ua)
					}
				}
				if (!Nb)
				{
					if (bb || ka && m.hasColumn)
					{
						p = (bb ? 1 : Ua) * 0.5;
						if (bb || !L(y(h.min, na)))
						{
							J -= p;
						}
						if (bb || !L(y(h.max, Ma)))
						{
							Q += p
						}
					}
					p = pa[0];
					r = pa[pa.length - 1];
					if (h.startOnTick)
					{
						J = p;
					}
					else
					{
						J > p && pa.shift();
					}
					if (h.endOnTick)
					{
						Q = r;
					}
					else
					{
						Q < r && pa.pop();
					}
					Eb || (Eb = {x:0,y:0});
					if (!N && pa.length > Eb[I])
					{
						Eb[I] = pa.length
					}
				}
			}

			function Da()
			{
				var l,p;
				fb = J;
				cc = Q;
				P();
				da();
				ha = F;
				F = B / (Q - J || 1);
				if (!ka)
				{
					for (l in ca)
					{
						for (p in ca[l])
						{
							ca[l][p].cum = ca[l][p].total;
						}
					}
				}
				if (!s.isDirty)
				{
					s.isDirty = J != fb || Q != cc
				}
			}

			function sa(l)
			{
				l =
						(new w(l)).render();
				Ob.push(l);
				return l
			}

			function Ya()
			{
				var l = h.title,p = h.alternateGridColor,r = h.lineWidth,o,U,X = m.hasRendered,H = X && L(fb) && !isNaN(fb);
				o = Y.length && L(J) && L(Q);
				B = O ? Ca : ra;
				F = B / (Q - J || 1);
				va = O ? W : pb;
				if (o || Nb)
				{
					if (Jc && !bb)
					{
						for (o = J + (pa[0] - J) % Jc; o <= Q; o += Jc)
						{
							Xb[o] || (Xb[o] = new x(o, true));
							H && Xb[o].isNew && Xb[o].render(null, true);
							Xb[o].isActive = true;
							Xb[o].render()
						}
					}
					t(pa, function(C, fa)
					{
						if (!Nb || C >= J && C <= Q)
						{
							H && qb[C].isNew && qb[C].render(fa, true);
							qb[C].isActive = true;
							qb[C].render(fa)
						}
					});
					p && t(pa, function(C, fa)
					{
						if (fa %
								2 === 0 && C < Q)
						{
							dc[C] || (dc[C] = new w);
							dc[C].options = {from:C,to:pa[fa + 1] !== Qa ? pa[fa + 1] : Q,color:p};
							dc[C].render();
							dc[C].isActive = true
						}
					});
					X || t((h.plotLines || []).concat(h.plotBands || []), function(C)
					{
						Ob.push((new w(C)).render())
					})
				}
				t([qb,Xb,dc], function(C)
				{
					for (var fa in C)
					{
						if (C[fa].isActive)
						{
							C[fa].isActive = false;
						}
						else
						{
							C[fa].destroy();
							delete C[fa]
						}
					}
				});
				if (r)
				{
					o = W + (Na ? Ca : 0) + R;
					U = Oa - pb - (Na ? ra : 0) + R;
					o = $.crispLine([Wa,O ? W : o,O ? U : aa,Ba,O ? Va - zb : o,O ? U : Oa - pb], r);
					if (Ea)
					{
						Ea.animate({d:o});
					}
					else
					{
						Ea = $.path(o).attr({stroke:h.lineColor,
							"stroke-width":r,zIndex:7}).add()
					}
				}
				if (s.axisTitle)
				{
					o = O ? W : aa;
					r = oa(l.style.fontSize || 12);
					o = {low:o + (O ? 0 : B),middle:o + B / 2,high:o + (O ? B : 0)}[l.align];
					r = (O ? aa + ra : W) + (O ? 1 : -1) * (Na ? -1 : 1) * ed + (G == 2 ? r : 0);
					s.axisTitle[X ? "animate" : "attr"]({x:O ? o : r + (Na ? Ca : 0) + R + (l.x || 0),y:O ? r - (Na ? ra : 0) + R : o + (l.y || 0)})
				}
				s.isDirty = false
			}

			function Ha(l)
			{
				for (var p = 0; p < Ob.length; p++)
				{
					Ob[p].id == l && Ob[p].destroy()
				}
			}

			var ka = h.isX,Na = h.opposite,O = Fa ? !ka : ka,G = O ? Na ? 0 : 2 : Na ? 1 : 3,ca = {};
			h = wa(ka ? Lc : fd, [Wd,Xd,Ld,Yd][G], h);
			var s = this,N = h.type == "datetime",R = h.offset ||
					0,I = ka ? "x" : "y",B,F,ha,va = O ? W : pb,ta,Ia,rb,Fb,Ea,Sa,v,Y,na,Ma,Q = null,J = null,fb,cc,Wb = h.minPadding,Kd = h.maxPadding,Nb = L(h.linkedTo),Id,Jd,Ic,Md = h.events,gd,Ob = [],Ua,Jc,Db,pa,qb = {},Xb = {},dc = {},ec,fc,ed,Kc,bb = h.categories,Zd = h.labels.formatter || function()
			{
				var l = this.value;
				return Kc ? Mc(Kc, l) : Ua % 1E6 === 0 ? l / 1E6 + "M" : Ua % 1E3 === 0 ? l / 1E3 + "k" : !bb && l >= 1E3 ? Gd(l, 0) : l
			},Nc = O && h.labels.staggerLines,Yb = h.reversed,Zb = bb && h.tickmarkPlacement == "between" ? 0.5 : 0;
			x.prototype = {addLabel:function()
			{
				var l = this.pos,p = h.labels,r = !(l ==
						J && !y(h.showFirstLabel, 1) || l == Q && !y(h.showLastLabel, 0)),o,U = this.label;
				l = Zd.call({isFirst:l == pa[0],isLast:l == pa[pa.length - 1],dateTimeLabelFormat:Kc,value:bb && bb[l] ? bb[l] : l});
				o = o && {width:o - 2 * (p.padding || 10) + Za};
				if (U === Qa)
				{
					this.label = L(l) && r && p.enabled ? $.text(l, 0, 0).attr({align:p.align,rotation:p.rotation}).css(ma(o, p.style)).add(rb) : null;
				}
				else
				{
					U && U.attr({text:l}).css(o)
				}
			},getLabelSize:function()
			{
				var l = this.label;
				return l ? (this.labelBBox = l.getBBox())[O ? "height" : "width"] : 0
			},render:function(l, p)
			{
				var r = !this.minor,
						o = this.label,U = this.pos,X = h.labels,H = this.gridLine,C = r ? h.gridLineWidth : h.minorGridLineWidth,fa = r ? h.gridLineColor : h.minorGridLineColor,ja = r ? h.gridLineDashStyle : h.minorGridLineDashStyle,D = this.mark,la = r ? h.tickLength : h.minorTickLength,S = r ? h.tickWidth : h.minorTickWidth || 0,Z = r ? h.tickColor : h.minorTickColor,pc = r ? h.tickPosition : h.minorTickPosition;
				r = X.step;
				var gb = p && Oc || Oa,Pb;
				Pb = O ? ta(U + Zb, null, null, p) + va : W + R + (Na ? (p && hd || Va) - zb - W : 0);
				gb = O ? gb - pb + R - (Na ? ra : 0) : gb - ta(U + Zb, null, null, p) - va;
				if (C)
				{
					U = Ia(U + Zb, C, p);
					if (H ===
							Qa)
					{
						H = {stroke:fa,"stroke-width":C};
						if (ja)
						{
							H.dashstyle = ja;
						}
						this.gridLine = H = C ? $.path(U).attr(H).add(Fb) : null
					}
					H && U && H.animate({d:U})
				}
				if (S)
				{
					if (pc == "inside")
					{
						la = -la;
					}
					if (Na)
					{
						la = -la;
					}
					C = $.crispLine([Wa,Pb,gb,Ba,Pb + (O ? 0 : -la),gb + (O ? la : 0)], S);
					if (D)
					{
						D.animate({d:C});
					}
					else
					{
						this.mark = $.path(C).attr({stroke:Z,"stroke-width":S}).add(rb)
					}
				}
				if (o)
				{
					Pb = Pb + X.x - (Zb && O ? Zb * F * (Yb ? -1 : 1) : 0);
					gb = gb + X.y - (Zb && !O ? Zb * F * (Yb ? 1 : -1) : 0);
					L(X.y) || (gb += parseInt(o.styles.lineHeight) * 0.9 - o.getBBox().height / 2);
					if (Nc)
					{
						gb += l % Nc * 16;
					}
					if (r)
					{
						o[l % r ? "hide" : "show"]();
					}
					o[this.isNew ? "attr" : "animate"]({x:Pb,y:gb})
				}
				this.isNew = false
			},destroy:function()
			{
				for (var l in this)
				{
					this[l] && this[l].destroy && this[l].destroy()
				}
			}};
			w.prototype = {render:function()
			{
				var l = this,p = l.options,r = p.label,o = l.label,U = p.width,X = p.to,H,C = p.from,fa = p.dashStyle,ja = l.svgElem,D = [],la,S,Z = p.color;
				S = p.zIndex;
				var pc = p.events;
				if (U)
				{
					D = Ia(p.value, U);
					p = {stroke:Z,"stroke-width":U};
					if (fa)
					{
						p.dashstyle = fa
					}
				} else if (L(C) && L(X))
				{
					C = Ga(C, J);
					X = nb(X, Q);
					H = Ia(X);
					if ((D = Ia(C)) && H)
					{
						D.push(H[4], H[5], H[1], H[2]);
					}
					else
					{
						D = null;
					}
					p =
					{fill:Z}
				}
				else
				{
					return;
				}
				if (L(S))
				{
					p.zIndex = S;
				}
				if (ja)
				{
					if (D)
					{
						ja.animate({d:D}, null, ja.onGetPath);
					}
					else
					{
						ja.hide();
						ja.onGetPath = function()
						{
							ja.show()
						}
					}
				} else if (D && D.length)
				{
					l.svgElem = ja = $.path(D).attr(p).add();
					if (pc)
					{
						fa = function(gb)
						{
							ja.on(gb, function(Pb)
							{
								pc[gb].apply(l, [Pb])
							})
						};
						for (la in pc)
						{
							fa(la)
						}
					}
				}
				if (r && L(r.text) && D && D.length && Ca > 0 && ra > 0)
				{
					r = wa({align:O && H && "center",x:O ? !H && 4 : 10,verticalAlign:!O && H && "middle",y:O ? H ? 16 : 10 : H ? 6 : -4,rotation:O && !H && 90}, r);
					if (!o)
					{
						l.label = o = $.text(r.text, 0, 0).attr({align:r.textAlign || r.align,
							rotation:r.rotation,zIndex:S}).css(r.style).add();
					}
					H = [D[1],D[4],D[6] || D[1]];
					D = [D[2],D[5],D[7] || D[2]];
					la = nb.apply(Ta, H);
					S = nb.apply(Ta, D);
					o.align(r, false, {x:la,y:S,width:Ga.apply(Ta, H) - la,height:Ga.apply(Ta, D) - S});
					o.show()
				}
				else
				{
					o && o.hide();
				}
				return l
			},destroy:function()
			{
				for (var l in this)
				{
					this[l] && this[l].destroy && this[l].destroy();
					delete this[l]
				}
				mc(Ob, this)
			}};
			ta = function(l, p, r, o)
			{
				var U = 1,X = 0,H = o ? ha : F;
				o = o ? fb : J;
				H || (H = F);
				if (r)
				{
					U *= -1;
					X = B
				}
				if (Yb)
				{
					U *= -1;
					X -= U * B
				}
				if (p)
				{
					if (Yb)
					{
						l = B - l;
					}
					l = l / H + o
				}
				else
				{
					l = U * (l - o) * H + X;
				}
				return l
			};
			Ia = function(l, p, r)
			{
				var o,U,X;
				l = ta(l, null, null, r);
				var H = r && Oc || Oa,C = r && hd || Va,fa;
				r = U = V(l + va);
				o = X = V(H - l - va);
				if (isNaN(l))
				{
					fa = true;
				} else if (O)
				{
					o = aa;
					X = H - pb;
					if (r < W || r > W + Ca)
					{
						fa = true
					}
				}
				else
				{
					r = W;
					U = C - zb;
					if (o < aa || o > aa + ra)
					{
						fa = true
					}
				}
				return fa ? null : $.crispLine([Wa,r,o,Ba,U,X], p || 0)
			};
			if (Fa && ka && Yb === Qa)
			{
				Yb = true;
			}
			ma(s, {addPlotBand:sa,addPlotLine:sa,adjustTickAmount:function()
			{
				if (Eb && !N && !bb && !Nb)
				{
					var l = ec,p = pa.length;
					ec = Eb[I];
					if (p < ec)
					{
						for (; pa.length < ec;)
						{
							pa.push(M(pa[pa.length - 1] + Ua));
						}
						F *= (p - 1) / (ec - 1);
						Q = pa[pa.length - 1]
					}
					if (L(l) &&
							ec != l)
					{
						s.isDirty = true
					}
				}
			},categories:bb,getExtremes:function()
			{
				return{min:J,max:Q,dataMin:Sa,dataMax:v}
			},getPlotLinePath:Ia,getThreshold:function(l)
			{
				if (J > l)
				{
					l = J;
				} else if (Q < l)
				{
					l = Q;
				}
				return ta(l, 0, 1)
			},isXAxis:ka,options:h,plotLinesAndBands:Ob,getOffset:function()
			{
				var l = Y.length && L(J) && L(Q),p = 0,r = 0,o = h.title,U = h.labels,X = [-1,1,1,-1][G];
				if (!rb)
				{
					rb = $.g("axis").attr({zIndex:7}).add();
					Fb = $.g("grid").attr({zIndex:1}).add()
				}
				fc = 0;
				if (l || Nb)
				{
					t(pa, function(C)
					{
						if (qb[C])
						{
							qb[C].addLabel();
						}
						else
						{
							qb[C] = new x(C);
						}
						if (G === 0 || G ==
								2 || {1:"left",3:"right"}[G] == U.align)
						{
							fc = Ga(qb[C].getLabelSize(), fc)
						}
					});
					if (Nc)
					{
						fc += (Nc - 1) * 16
					}
				}
				else
				{
					for (var H in qb)
					{
						qb[H].destroy();
						delete qb[H]
					}
				}
				if (o && o.text)
				{
					if (!s.axisTitle)
					{
						s.axisTitle = $.text(o.text, 0, 0).attr({zIndex:7,rotation:o.rotation || 0,align:o.textAlign || {low:"left",middle:"center",high:"right"}[o.align]}).css(o.style).add();
					}
					p = s.axisTitle.getBBox()[O ? "height" : "width"];
					r = y(o.margin, O ? 5 : 10)
				}
				R = X * (h.offset || Qb[G]);
				ed = fc + (G != 2 && fc && X * h.labels[O ? "y" : "x"]) + r;
				Qb[G] = Ga(Qb[G], ed + p + X * R)
			},render:Ya,setCategories:function(l, p)
			{
				s.categories = bb = l;
				t(Y, function(r)
				{
					r.translate();
					r.setTooltipPoints(true)
				});
				s.isDirty = true;
				y(p, true) && m.redraw()
			},setExtremes:function(l, p, r, o)
			{
				Kb(o, m);
				r = y(r, true);
				Ja(s, "setExtremes", {min:l,max:p}, function()
				{
					na = l;
					Ma = p;
					r && m.redraw()
				})
			},setScale:Da,setTickPositions:da,translate:ta,redraw:function()
			{
				gc.resetTracker && gc.resetTracker();
				Ya();
				t(Ob, function(l)
				{
					l.render()
				});
				t(Y, function(l)
				{
					l.isDirty = true
				})
			},removePlotBand:Ha,removePlotLine:Ha,reversed:Yb,stacks:ca});
			for (gd in Md)
			{
				Pa(s, gd, Md[gd]);
			}
			Da()
		}

		function d()
		{
			var m =
			{};
			return{add:function(h, x, w, P)
			{
				if (!m[h])
				{
					x = $.text(x, 0, 0).css(a.toolbar.itemStyle).align({align:"right",x:-zb - 20,y:aa + 30}).on("click", P).attr({align:"right",zIndex:20}).add();
					m[h] = x
				}
			},remove:function(h)
			{
				Fc(m[h].element);
				m[h] = null
			}}
		}

		function e(m)
		{
			function h()
			{
				var I = this.points || nc(this),B = I[0].series.xAxis,F = this.x;
				B = B && B.options.type == "datetime";
				var ha = Ib(F) || B,va;
				va = ha ? ['<span style="font-size: 10px">',B ? Mc("%A, %b %e, %Y", F) : F,"</span><br/>"] : [];
				t(I, function(ta)
				{
					va.push(ta.point.tooltipFormatter(ha))
				});
				return va.join("")
			}

			function x(I, B)
			{
				G = ka ? I : (2 * G + I) / 3;
				ca = ka ? B : (ca + B) / 2;
				s.translate(G, ca);
				id = ab(I - G) > 1 || ab(B - ca) > 1 ? function()
				{
					x(I, B)
				} : null
			}

			function w()
			{
				if (!ka)
				{
					var I = q.hoverPoints;
					s.hide();
					t(da, function(B)
					{
						B && B.hide()
					});
					I && t(I, function(B)
					{
						B.setState()
					});
					q.hoverPoints = null;
					ka = true
				}
			}

			var P,ga = m.borderWidth,M = m.crosshairs,da = [],Da = m.style,sa = m.shared,Ya = oa(Da.padding),Ha = ga + Ya,ka = true,Na,O,G = 0,ca = 0;
			Da.padding = 0;
			var s = $.g("tooltip").attr({zIndex:8}).add(),N = $.rect(Ha, Ha, 0, 0, m.borderRadius, ga).attr({fill:m.backgroundColor,
				"stroke-width":ga}).add(s).shadow(m.shadow),R = $.text("", Ya + Ha, oa(Da.fontSize) + Ya + Ha).attr({zIndex:1}).css(Da).add(s);
			s.hide();
			return{shared:sa,refresh:function(I)
			{
				var B,F,ha,va = 0,ta = {},Ia = [];
				ha = I.tooltipPos;
				B = m.formatter || h;
				ta = q.hoverPoints;
				var rb = function(Ea)
				{
					return{series:Ea.series,point:Ea,x:Ea.category,y:Ea.y,percentage:Ea.percentage,total:Ea.total || Ea.stackTotal}
				};
				if (sa)
				{
					ta && t(ta, function(Ea)
					{
						Ea.setState()
					});
					q.hoverPoints = I;
					t(I, function(Ea)
					{
						Ea.setState(xb);
						va += Ea.plotY;
						Ia.push(rb(Ea))
					});
					F = I[0].plotX;
					va = V(va) / I.length;
					ta = {x:I[0].category};
					ta.points = Ia;
					I = I[0]
				}
				else
				{
					ta = rb(I);
				}
				ta = B.call(ta);
				P = I.series;
				F = sa ? F : I.plotX;
				va = sa ? va : I.plotY;
				B = V(ha ? ha[0] : Fa ? Ca - va : F);
				F = V(ha ? ha[1] : Fa ? ra - F : va);
				ha = sa || !I.series.isCartesian || hc(B, F);
				if (ta === false || !ha)
				{
					w();
				}
				else
				{
					if (ka)
					{
						s.show();
						ka = false
					}
					R.attr({text:ta});
					ha = R.getBBox();
					Na = ha.width;
					O = ha.height;
					N.attr({width:Na + 2 * Ya,height:O + 2 * Ya,stroke:m.borderColor || I.color || P.color || "#606060"});
					B = B - Na + W - 25;
					F = F - O + aa + 10;
					if (B < 7)
					{
						B = 7;
						F -= 30
					}
					if (F < 5)
					{
						F = 5;
					} else if (F + O > Oa)
					{
						F = Oa - O - 5;
					}
					x(V(B - Ha),
							V(F - Ha))
				}
				if (M)
				{
					M = nc(M);
					F = M.length;
					for (var Fb; F--;)
					{
						if (M[F] && (Fb = I.series[F ? "yAxis" : "xAxis"]))
						{
							B = Fb.getPlotLinePath(I[F ? "y" : "x"], 1);
							if (da[F])
							{
								da[F].attr({d:B,visibility:Ab});
							}
							else
							{
								ha = {"stroke-width":M[F].width || 1,stroke:M[F].color || "#C0C0C0",zIndex:2};
								if (M[F].dashStyle)
								{
									ha.dashstyle = M[F].dashStyle;
								}
								da[F] = $.path(B).attr(ha).add()
							}
						}
					}
				}
			},hide:w}
		}

		function f(m, h)
		{
			function x(G)
			{
				var ca;
				G = G || hb.event;
				if (!G.target)
				{
					G.target = G.srcElement;
				}
				ca = G.touches ? G.touches.item(0) : G;
				if (G.type != "mousemove" || hb.opera)
				{
					for (var s = ua,
								 N = {left:s.offsetLeft,top:s.offsetTop}; s = s.offsetParent;)
					{
						N.left += s.offsetLeft;
						N.top += s.offsetTop;
						if (s != za.body && s != za.documentElement)
						{
							N.left -= s.scrollLeft;
							N.top -= s.scrollTop
						}
					}
					qc = N
				}
				if (Ac)
				{
					G.chartX = G.x;
					G.chartY = G.y
				} else if (ca.layerX === Qa)
				{
					G.chartX = ca.pageX - qc.left;
					G.chartY = ca.pageY - qc.top
				}
				else
				{
					G.chartX = G.layerX;
					G.chartY = G.layerY
				}
				return G
			}

			function w(G)
			{
				var ca = {xAxis:[],yAxis:[]};
				t(Xa, function(s)
				{
					var N = s.translate,R = s.isXAxis;
					ca[R ? "xAxis" : "yAxis"].push({axis:s,value:N((Fa ? !R : R) ? G.chartX - W : ra - G.chartY +
							aa, true)})
				});
				return ca
			}

			function P()
			{
				var G = m.hoverSeries,ca = m.hoverPoint;
				ca && ca.onMouseOut();
				G && G.onMouseOut();
				rc && rc.hide();
				jd = null
			}

			function ga()
			{
				if (sa)
				{
					var G = {xAxis:[],yAxis:[]},ca = sa.getBBox(),s = ca.x - W,N = ca.y - aa;
					if (Da)
					{
						t(Xa, function(R)
						{
							var I = R.translate,B = R.isXAxis,F = Fa ? !B : B,ha = I(F ? s : ra - N - ca.height, true);
							I = I(F ? s + ca.width : ra - N, true);
							G[B ? "xAxis" : "yAxis"].push({axis:R,min:nb(ha, I),max:Ga(ha, I)})
						});
						Ja(m, "selection", G, kd)
					}
					sa = sa.destroy()
				}
				m.mouseIsDown = ld = Da = false;
				Bb(za, Gb ? "touchend" : "mouseup", ga)
			}

			var M,
					da,Da,sa,Ya = u.zoomType,Ha = /x/.test(Ya),ka = /y/.test(Ya),Na = Ha && !Fa || ka && Fa,O = ka && !Fa || Ha && Fa;
			Pc = function()
			{
				if (Qc)
				{
					Qc.translate(W, aa);
					Fa && Qc.attr({width:m.plotWidth,height:m.plotHeight}).invert()
				}
				else
				{
					m.trackerGroup = Qc = $.g("tracker").attr({zIndex:9}).add()
				}
			};
			Pc();
			if (h.enabled)
			{
				m.tooltip = rc = e(h);
			}
			(function()
			{
				var G = true;
				ua.onmousedown = function(s)
				{
					s = x(s);
					m.mouseIsDown = ld = true;
					M = s.chartX;
					da = s.chartY;
					Pa(za, Gb ? "touchend" : "mouseup", ga)
				};
				var ca = function(s)
				{
					if (!(s && s.touches && s.touches.length > 1))
					{
						s = x(s);
						if (!Gb)
						{
							s.returnValue =
									false;
						}
						var N = s.chartX,R = s.chartY,I = !hc(N - W, R - aa);
						if (Gb && s.type == "touchstart")
						{
							if (xa(s.target, "isTracker"))
							{
								m.runTrackerClick || s.preventDefault();
							}
							else
							{
								!$d && !I && s.preventDefault();
							}
						}
						if (I)
						{
							G || P();
							if (N < W)
							{
								N = W;
							} else if (N > W + Ca)
							{
								N = W + Ca;
							}
							if (R < aa)
							{
								R = aa;
							} else if (R > aa + ra)
							{
								R = aa + ra
							}
						}
						if (ld && s.type != "touchstart")
						{
							if (Da = Math.sqrt(Math.pow(M - N, 2) + Math.pow(da - R, 2)) > 10)
							{
								if (ic && (Ha || ka) && hc(M - W, da - aa))
								{
									sa || (sa = $.rect(W, aa, Na ? 1 : Ca, O ? 1 : ra, 0).attr({fill:"rgba(69,114,167,0.25)",zIndex:7}).add());
								}
								if (sa && Na)
								{
									N = N - M;
									sa.attr({width:ab(N),x:(N >
											0 ? 0 : N) + M})
								}
								if (sa && O)
								{
									R = R - da;
									sa.attr({height:ab(R),y:(R > 0 ? 0 : R) + da})
								}
							}
						} else if (!I)
						{
							var B;
							R = m.hoverPoint;
							N = m.hoverSeries;
							var F,ha,va = Va,ta = Fa ? s.chartY : s.chartX - W;
							if (rc && h.shared)
							{
								B = [];
								F = Aa.length;
								for (ha = 0; ha < F; ha++)
								{
									if (Aa[ha].visible && Aa[ha].tooltipPoints.length)
									{
										s = Aa[ha].tooltipPoints[ta];
										s._dist = ab(ta - s.plotX);
										va = nb(va, s._dist);
										B.push(s)
									}
								}
								for (F = B.length; F--;)
								{
									B[F]._dist > va && B.splice(F, 1);
								}
								if (B.length && B[0].plotX != jd)
								{
									rc.refresh(B);
									jd = B[0].plotX
								}
							}
							if (N && N.tracker)
							{
								(s = N.tooltipPoints[ta]) && s != R && s.onMouseOver()
							}
						}
						return(G =
								I) || !ic
					}
				};
				ua.onmousemove = ca;
				Pa(ua, "mouseleave", P);
				ua.ontouchstart = function(s)
				{
					if (Ha || ka)
					{
						ua.onmousedown(s);
					}
					ca(s)
				};
				ua.ontouchmove = ca;
				ua.ontouchend = function()
				{
					Da && P()
				};
				ua.onclick = function(s)
				{
					var N = m.hoverPoint;
					s = x(s);
					s.cancelBubble = true;
					if (!Da)
					{
						if (N && xa(s.target, "isTracker"))
						{
							var R = N.plotX,I = N.plotY;
							ma(N, {pageX:qc.left + W + (Fa ? Ca - I : R),pageY:qc.top + aa + (Fa ? ra - R : I)});
							Ja(N.series, "click", ma(s, {point:N}));
							N.firePointEvent("click", s)
						}
						else
						{
							ma(s, w(s));
							hc(s.chartX - W, s.chartY - aa) && Ja(m, "click", s)
						}
					}
					Da = false
				}
			})();
			Nd =
					setInterval(function()
					{
						id && id()
					}, 32);
			ma(this, {zoomX:Ha,zoomY:ka,resetTracker:P})
		}

		function g(m)
		{
			var h = m.type || u.type || u.defaultSeriesType,x = sb[h],w = q.hasRendered;
			if (w)
			{
				if (Fa && h == "column")
				{
					x = sb.bar;
				} else if (!Fa && h == "bar")
				{
					x = sb.column;
				}
			}
			h = new x;
			h.init(q, m);
			if (!w && h.inverted)
			{
				Fa = true;
			}
			if (h.isCartesian)
			{
				ic = h.isCartesian;
			}
			Aa.push(h);
			return h
		}

		function i()
		{
			u.alignTicks !== false && t(Xa, function(m)
			{
				m.adjustTickAmount()
			});
			Eb = null
		}

		function j(m)
		{
			var h = q.isDirtyLegend,x,w = q.isDirtyBox,P = Aa.length,ga = P,M = q.clipRect;
			for (Kb(m,
					q); ga--;)
			{
				m = Aa[ga];
				if (m.isDirty && m.options.stacking)
				{
					x = true;
					break
				}
			}
			if (x)
			{
				for (ga = P; ga--;)
				{
					m = Aa[ga];
					if (m.options.stacking)
					{
						m.isDirty = true
					}
				}
			}
			t(Aa, function(da)
			{
				if (da.isDirty)
				{
					da.cleanData();
					da.getSegments();
					if (da.options.legendType == "point")
					{
						h = true
					}
				}
			});
			if (h && md.renderLegend)
			{
				md.renderLegend();
				q.isDirtyLegend = false
			}
			if (ic)
			{
				if (!Rc)
				{
					Eb = null;
					t(Xa, function(da)
					{
						da.setScale()
					})
				}
				i();
				sc();
				t(Xa, function(da)
				{
					if (da.isDirty || w)
					{
						da.redraw();
						w = true
					}
				})
			}
			if (w)
			{
				nd();
				Pc();
				if (M)
				{
					Sc(M);
					M.animate({width:q.plotSizeX,height:q.plotSizeY})
				}
			}
			t(Aa,
					function(da)
					{
						if (da.isDirty && da.visible && (!da.isCartesian || da.xAxis))
						{
							da.redraw()
						}
					});
			gc && gc.resetTracker && gc.resetTracker();
			Ja(q, "redraw")
		}

		function k()
		{
			var m = a.xAxis || {},h = a.yAxis || {},x;
			m = nc(m);
			t(m, function(w, P)
			{
				w.index = P;
				w.isX = true
			});
			h = nc(h);
			t(h, function(w, P)
			{
				w.index = P
			});
			Xa = m.concat(h);
			q.xAxis = [];
			q.yAxis = [];
			Xa = jc(Xa, function(w)
			{
				x = new c(q, w);
				q[x.isXAxis ? "xAxis" : "yAxis"].push(x);
				return x
			});
			i()
		}

		function n(m, h)
		{
			kc = wa(a.title, m);
			tc = wa(a.subtitle, h);
			t([
				["title",m,kc],
				["subtitle",h,tc]
			], function(x)
			{
				var w =
						x[0],P = q[w],ga = x[1];
				x = x[2];
				if (P && ga)
				{
					P.destroy();
					P = null
				}
				if (x && x.text && !P)
				{
					q[w] = $.text(x.text, 0, 0).attr({align:x.align,"class":"highcharts-" + w,zIndex:1}).css(x.style).add().align(x, false, uc)
				}
			})
		}

		function z()
		{
			ib = u.renderTo;
			Od = $b + od++;
			if (Ib(ib))
			{
				ib = za.getElementById(ib);
			}
			ib.innerHTML = "";
			if (!ib.offsetWidth)
			{
				Rb = ib.cloneNode(0);
				La(Rb, {position:lc,top:"-9999px",display:""});
				za.body.appendChild(Rb)
			}
			Tc = (Rb || ib).offsetWidth;
			vc = (Rb || ib).offsetHeight;
			q.chartWidth = Va = u.width || Tc || 600;
			q.chartHeight = Oa = u.height || (vc >
					19 ? vc : 400);
			q.container = ua = eb(Lb, {className:"highcharts-container" + (u.className ? " " + u.className : ""),id:Od}, ma({position:Pd,overflow:tb,width:Va + Za,height:Oa + Za,textAlign:"left"}, u.style), Rb || ib);
			q.renderer = $ = u.renderer == "SVG" ? new Uc(ua, Va, Oa) : new Qd(ua, Va, Oa);
			var m,h;
			if (/Firefox/.test(wc) && ua.getBoundingClientRect)
			{
				m = function()
				{
					La(ua, {left:0,top:0});
					h = ua.getBoundingClientRect();
					La(ua, {left:-h.left % 1 + Za,top:-h.top % 1 + Za})
				};
				m();
				Pa(hb, "resize", m);
				Pa(q, "destroy", function()
				{
					Bb(hb, "resize", m)
				})
			}
		}

		function E()
		{
			function m()
			{
				var x =
						u.width || ib.offsetWidth,w = u.height || ib.offsetHeight;
				if (x && w)
				{
					if (x != Tc || w != vc)
					{
						clearTimeout(h);
						h = setTimeout(function()
						{
							pd(x, w, false)
						}, 100)
					}
					Tc = x;
					vc = w
				}
			}

			var h;
			Pa(window, "resize", m);
			Pa(q, "destroy", function()
			{
				Bb(window, "resize", m)
			})
		}

		function ia()
		{
			var m = a.labels,h = a.credits,x;
			n();
			md = q.legend = new ae(q);
			sc();
			t(Xa, function(w)
			{
				w.setTickPositions(true)
			});
			i();
			sc();
			nd();
			ic && t(Xa, function(w)
			{
				w.render()
			});
			if (!q.seriesGroup)
			{
				q.seriesGroup = $.g("series-group").attr({zIndex:3}).add();
			}
			t(Aa, function(w)
			{
				w.translate();
				w.setTooltipPoints();
				w.render()
			});
			m.items && t(m.items, function()
			{
				var w = ma(m.style, this.style),P = oa(w.left) + W,ga = oa(w.top) + aa + 12;
				delete w.left;
				delete w.top;
				$.text(this.html, P, ga).attr({zIndex:2}).css(w).add()
			});
			if (!q.toolbar)
			{
				q.toolbar = d(q);
			}
			if (h.enabled && !q.credits)
			{
				x = h.href;
				$.text(h.text, 0, 0).on("click",
						function()
						{
							if (x)
							{
								location.href = x
							}
						}).attr({align:h.position.align,zIndex:8}).css(h.style).add().align(h.position)
			}
			Pc();
			q.hasRendered = true;
			if (Rb)
			{
				ib.appendChild(ua);
				Fc(Rb)
			}
		}

		function T()
		{
			var m = Aa.length,h = ua && ua.parentNode;
			Ja(q,
					"destroy");
			Bb(hb, "unload", T);
			Bb(q);
			for (t(Xa, function(x)
			{
				Bb(x)
			}); m--;)
			{
				Aa[m].destroy();
			}
			ua.innerHTML = "";
			Bb(ua);
			h && h.removeChild(ua);
			ua = null;
			$.alignedObjects = null;
			clearInterval(Nd);
			for (m in q)
			{
				delete q[m]
			}
		}

		function K()
		{
			if (!xc && !hb.parent && za.readyState != "complete")
			{
				za.attachEvent("onreadystatechange", function()
				{
					za.detachEvent("onreadystatechange", K);
					K()
				});
			}
			else
			{
				z();
				qd();
				rd();
				t(a.series || [], function(m)
				{
					g(m)
				});
				q.inverted = Fa = y(Fa, a.chart.inverted);
				k();
				q.render = ia;
				q.tracker = gc = new f(q, a.tooltip);
				ia();
				Ja(q, "load");
				b && b.apply(q, [q]);
				t(q.callbacks, function(m)
				{
					m.apply(q, [q])
				})
			}
		}

		Lc = wa(Lc, Ra.xAxis);
		fd = wa(fd, Ra.yAxis);
		Ra.xAxis = Ra.yAxis = null;
		a = wa(Ra, a);
		var u = a.chart,A = u.margin;
		A = Jb(A) ? A : [A,A,A,A];
		var ba = y(u.marginTop, A[0]),ya = y(u.marginRight, A[1]),ea = y(u.marginBottom, A[2]),qa = y(u.marginLeft, A[3]),$a = u.spacingTop,jb = u.spacingRight,sd = u.spacingBottom,Vc = u.spacingLeft,uc,kc,tc,aa,zb,pb,W,Qb,ib,Rb,ua,Od,Tc,vc,Va,Oa,hd,Oc,td,ud,vd,wd,q = this,$d = (A = u.events) && !!A.click,xd,hc,rc,ld,ac,Rd,yd,ra,Ca,gc,Qc,Pc,md,Sb,Tb,qc,ic =
				u.showAxes,Rc = 0,Xa = [],Eb,Aa = [],Fa,$,id,Nd,jd,nd,sc,qd,rd,pd,kd,Sd,ae = function(m)
		{
			function h(v, Y)
			{
				var na = v.legendItem,Ma = v.legendLine,Q = v.legendSymbol,J = O.color,fb = Y ? M.itemStyle.color : J;
				J = Y ? v.color : J;
				na && na.css({fill:fb});
				Ma && Ma.attr({stroke:J});
				Q && Q.attr({stroke:J,fill:J})
			}

			function x(v, Y, na)
			{
				var Ma = v.legendItem,Q = v.legendLine,J = v.legendSymbol;
				v = v.checkbox;
				Ma && Ma.attr({x:Y,y:na});
				Q && Q.translate(Y, na - 4);
				J && J.attr({x:Y + J.xOff,y:na + J.yOff});
				if (v)
				{
					v.x = Y;
					v.y = na
				}
			}

			function w()
			{
				t(Ya, function(v)
				{
					var Y = v.checkbox;
					Y && La(Y, {left:Ia.attr("translateX") + v.legendItemWidth + Y.x - 40 + Za,top:Ia.attr("translateY") + Y.y - 11 + Za})
				})
			}

			function P(v)
			{
				var Y,na,Ma,Q,J,fb = v.legendItem;
				Q = v.series || v;
				if (!fb)
				{
					J = /^(bar|pie|area|column)$/.test(Q.type);
					v.legendItem = fb = $.text(M.labelFormatter.call(v), 0, 0).css(v.visible ? ka : O).on("mouseover",
							function()
							{
								v.setState(xb);
								fb.css(Na)
							}).on("mouseout",
							function()
							{
								fb.css(v.visible ? ka : O);
								v.setState()
							}).on("click",
							function()
							{
								var Wb = function()
								{
									v.setVisible()
								};
								v.firePointEvent ? v.firePointEvent("legendItemClick",
										null, Wb) : Ja(v, "legendItemClick", null, Wb)
							}).attr({zIndex:2}).add(Ia);
					if (!J && v.options && v.options.lineWidth)
					{
						var cc = v.options;
						Q = {"stroke-width":cc.lineWidth,zIndex:2};
						if (cc.dashStyle)
						{
							Q.dashstyle = cc.dashStyle;
						}
						v.legendLine = $.path([Wa,-Da - sa,0,Ba,-sa,0]).attr(Q).add(Ia)
					}
					if (J)
					{
						Y = $.rect(na = -Da - sa, Ma = -11, Da, 12, 2).attr({"stroke-width":0,zIndex:3}).add(Ia);
					} else if (v.options && v.options.marker && v.options.marker.enabled)
					{
						Y = $.symbol(v.symbol, na = -Da / 2 - sa, Ma = -4, v.options.marker.radius).attr(v.pointAttr[cb]).attr({zIndex:3}).add(Ia);
					}
					if (Y)
					{
						Y.xOff = na;
						Y.yOff = Ma
					}
					v.legendSymbol = Y;
					h(v, v.visible);
					if (v.options && v.options.showCheckbox)
					{
						v.checkbox = eb("input", {type:"checkbox",checked:v.selected,defaultChecked:v.selected}, M.itemCheckboxStyle, ua);
						Pa(v.checkbox, "click", function(Wb)
						{
							Ja(v, "checkboxClick", {checked:Wb.target.checked}, function()
							{
								v.select()
							})
						})
					}
				}
				Y = fb.getBBox();
				na = v.legendItemWidth = M.itemWidth || Da + sa + Y.width + ca;
				F = Y.height;
				if (da && R - N + na > (Fb || Va - 2 * G - N))
				{
					R = N;
					I += F
				}
				B = I;
				x(v, R, I);
				if (da)
				{
					R += na;
				}
				else
				{
					I += F;
				}
				rb = Fb || Ga(da ? R - N : na, rb);
				Ya.push(v)
			}

			function ga()
			{
				R = N;
				I = s;
				B = rb = 0;
				Ya = [];
				Ia || (Ia = $.g("legend").attr({zIndex:7}).add());
				Sa && Ea.reverse();
				t(Ea, function(Ma)
				{
					if (Ma.options.showInLegend)
					{
						t(Ma.options.legendType == "point" ? Ma.data : [Ma], P)
					}
				});
				Sa && Ea.reverse();
				Sb = Fb || rb;
				Tb = B - s + F;
				if (va || ta)
				{
					Sb += 2 * G;
					Tb += 2 * G;
					if (ha)
					{
						Sb > 0 && Tb > 0 && ha.animate({width:Sb,height:Tb});
					}
					else
					{
						ha = $.rect(0, 0, Sb, Tb, M.borderRadius, va || 0).attr({stroke:M.borderColor,"stroke-width":va || 0,fill:ta || mb}).add(Ia).shadow(M.shadow);
					}
					ha[Ya.length ? "show" : "hide"]()
				}
				for (var v = ["left","right","top",
					"bottom"],Y,na = 4; na--;)
				{
					Y = v[na];
					if (Ha[Y] && Ha[Y] != "auto")
					{
						M[na < 2 ? "align" : "verticalAlign"] = Y;
						M[na < 2 ? "x" : "y"] = oa(Ha[Y]) * (na % 2 ? -1 : 1)
					}
				}
				Ia.align(ma(M, {width:Sb,height:Tb}), true, uc);
				Rc || w()
			}

			var M = m.options.legend;
			if (M.enabled)
			{
				var da = M.layout == "horizontal",Da = M.symbolWidth,sa = M.symbolPadding,Ya,Ha = M.style,ka = M.itemStyle,Na = M.itemHoverStyle,O = M.itemHiddenStyle,G = oa(Ha.padding),ca = 20,s = 18,N = 4 + G + Da + sa,R,I,B,F = 0,ha,va = M.borderWidth,ta = M.backgroundColor,Ia,rb,Fb = M.width,Ea = m.series,Sa = M.reversed;
				ga();
				Pa(m, "endResize",
						w);
				return{colorizeItem:h,destroyItem:function(v)
				{
					var Y = v.checkbox;
					t(["legendItem","legendLine","legendSymbol"], function(na)
					{
						v[na] && v[na].destroy()
					});
					Y && Fc(v.checkbox)
				},renderLegend:ga}
			}
		};
		hc = function(m, h)
		{
			return m >= 0 && m <= Ca && h >= 0 && h <= ra
		};
		Sd = function()
		{
			Ja(q, "selection", {resetSelection:true}, kd);
			q.toolbar.remove("zoom")
		};
		kd = function(m)
		{
			var h = Ra.lang,x = q.pointCount < 100;
			q.toolbar.add("zoom", h.resetZoom, h.resetZoomTitle, Sd);
			!m || m.resetSelection ? t(Xa, function(w)
			{
				w.setExtremes(null, null, false, x)
			}) : t(m.xAxis.concat(m.yAxis),
					function(w)
					{
						var P = w.axis;
						if (q.tracker[P.isXAxis ? "zoomX" : "zoomY"])
						{
							P.setExtremes(w.min, w.max, false, x)
						}
					});
			j()
		};
		sc = function()
		{
			var m = a.legend,h = y(m.margin, 10),x = m.x,w = m.y,P = m.align,ga = m.verticalAlign,M;
			qd();
			if ((q.title || q.subtitle) && !L(ba))
			{
				if (M = Ga(q.title && !kc.floating && !kc.verticalAlign && kc.y || 0, q.subtitle && !tc.floating && !tc.verticalAlign && tc.y || 0))
				{
					aa = Ga(aa, M + y(kc.margin, 15) + $a);
				}
			}
			if (m.enabled && !m.floating)
			{
				if (P == "right")
				{
					L(ya) || (zb = Ga(zb, Sb - x + h + jb));
				} else if (P == "left")
				{
					L(qa) || (W = Ga(W, Sb + x + h + Vc));
				} else if (ga ==
						"top")
				{
					L(ba) || (aa = Ga(aa, Tb + w + h + $a));
				} else if (ga == "bottom")
				{
					L(ea) || (pb = Ga(pb, Tb - w + h + sd));
				}
			}
			ic && t(Xa, function(da)
			{
				da.getOffset()
			});
			L(qa) || (W += Qb[3]);
			L(ba) || (aa += Qb[0]);
			L(ea) || (pb += Qb[2]);
			L(ya) || (zb += Qb[1]);
			rd()
		};
		pd = function(m, h, x)
		{
			var w = q.title,P = q.subtitle;
			Rc += 1;
			Kb(x, q);
			Oc = Oa;
			hd = Va;
			Va = V(m);
			Oa = V(h);
			La(ua, {width:Va + Za,height:Oa + Za});
			$.setSize(Va, Oa, x);
			Ca = Va - W - zb;
			ra = Oa - aa - pb;
			Eb = null;
			t(Xa, function(ga)
			{
				ga.isDirty = true;
				ga.setScale()
			});
			t(Aa, function(ga)
			{
				ga.isDirty = true
			});
			q.isDirtyLegend = true;
			q.isDirtyBox = true;
			sc();
			w && w.align(null, null, uc);
			P && P.align(null, null, uc);
			j(x);
			Oc = null;
			Ja(q, "resize");
			setTimeout(function()
			{
				Ja(q, "endResize", null, function()
				{
					Rc -= 1
				})
			}, Bc && Bc.duration || 500)
		};
		rd = function()
		{
			q.plotLeft = W = V(W);
			q.plotTop = aa = V(aa);
			q.plotWidth = Ca = V(Va - W - zb);
			q.plotHeight = ra = V(Oa - aa - pb);
			q.plotSizeX = Fa ? ra : Ca;
			q.plotSizeY = Fa ? Ca : ra;
			uc = {x:Vc,y:$a,width:Va - Vc - jb,height:Oa - $a - sd}
		};
		qd = function()
		{
			aa = y(ba, $a);
			zb = y(ya, jb);
			pb = y(ea, sd);
			W = y(qa, Vc);
			Qb = [0,0,0,0]
		};
		nd = function()
		{
			var m = u.borderWidth || 0,h = u.backgroundColor,x = u.plotBackgroundColor,
					w = u.plotBackgroundImage,P,ga = {x:W,y:aa,width:Ca,height:ra};
			P = m + (u.shadow ? 8 : 0);
			if (m || h)
			{
				if (td)
				{
					td.animate({width:Va - P,height:Oa - P});
				}
				else
				{
					td = $.rect(P / 2, P / 2, Va - P, Oa - P, u.borderRadius, m).attr({stroke:u.borderColor,"stroke-width":m,fill:h || mb}).add().shadow(u.shadow);
				}
			}
			if (x)
			{
				if (ud)
				{
					ud.animate(ga);
				}
				else
				{
					ud = $.rect(W, aa, Ca, ra, 0).attr({fill:x}).add().shadow(u.plotShadow);
				}
			}
			if (w)
			{
				if (vd)
				{
					vd.animate(ga);
				}
				else
				{
					vd = $.image(w, W, aa, Ca, ra).add();
				}
			}
			if (u.plotBorderWidth)
			{
				if (wd)
				{
					wd.animate(ga);
				}
				else
				{
					wd = $.rect(W, aa, Ca, ra, 0, u.plotBorderWidth).attr({stroke:u.plotBorderColor,
						"stroke-width":u.plotBorderWidth,zIndex:4}).add();
				}
			}
			q.isDirtyBox = false
		};
		Wc = Hb = 0;
		Pa(hb, "unload", T);
		u.reflow !== false && Pa(q, "load", E);
		if (A)
		{
			for (xd in A)
			{
				Pa(q, xd, A[xd]);
			}
		}
		q.options = a;
		q.series = Aa;
		q.addSeries = function(m, h, x)
		{
			var w;
			if (m)
			{
				Kb(x, q);
				h = y(h, true);
				Ja(q, "addSeries", {options:m}, function()
				{
					w = g(m);
					w.isDirty = true;
					q.isDirtyLegend = true;
					h && q.redraw()
				})
			}
			return w
		};
		q.animation = y(u.animation, true);
		q.destroy = T;
		q.get = function(m)
		{
			var h,x,w;
			for (h = 0; h < Xa.length; h++)
			{
				if (Xa[h].options.id == m)
				{
					return Xa[h];
				}
			}
			for (h = 0; h < Aa.length; h++)
			{
				if (Aa[h].options.id ==
						m)
				{
					return Aa[h];
				}
			}
			for (h = 0; h < Aa.length; h++)
			{
				w = Aa[h].data;
				for (x = 0; x < w.length; x++)
				{
					if (w[x].id == m)
					{
						return w[x]
					}
				}
			}
			return null
		};
		q.getSelectedPoints = function()
		{
			var m = [];
			t(Aa, function(h)
			{
				m = m.concat(zd(h.data, function(x)
				{
					return x.selected
				}))
			});
			return m
		};
		q.getSelectedSeries = function()
		{
			return zd(Aa, function(m)
			{
				return m.selected
			})
		};
		q.hideLoading = function()
		{
			Xc(ac, {opacity:0}, {duration:a.loading.hideDuration,complete:function()
			{
				La(ac, {display:mb})
			}});
			yd = false
		};
		q.isInsidePlot = hc;
		q.redraw = j;
		q.setSize = pd;
		q.setTitle = n;
		q.showLoading =
				function(m)
				{
					var h = a.loading;
					if (!ac)
					{
						ac = eb(Lb, {className:"highcharts-loading"}, ma(h.style, {left:W + Za,top:aa + Za,width:Ca + Za,height:ra + Za,zIndex:10,display:mb}), ua);
						Rd = eb("span", null, h.labelStyle, ac)
					}
					Rd.innerHTML = m || a.lang.loading;
					if (!yd)
					{
						La(ac, {opacity:0,display:""});
						Xc(ac, {opacity:h.style.opacity}, {duration:h.showDuration});
						yd = true
					}
				};
		q.pointCount = 0;
		K()
	}

	var za = document,hb = window,Ta = Math,V = Ta.round,Mb = Ta.floor,dd = Ta.ceil,Ga = Ta.max,nb = Ta.min,ab = Ta.abs,ub = Ta.cos,yb = Ta.sin,Ub = Ta.PI,Td = Ub * 2 / 360,wc = navigator.userAgent,
			Ac = /msie/i.test(wc) && !hb.opera,yc = za.documentMode == 8,be = /AppleWebKit/.test(wc),xc = hb.SVGAngle || za.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"),Gb = "ontouchstart"in za.documentElement,Hb,Wc,ce = {},od = 0,ob = 1,Gc,Ra,Mc,Bc,Yc,Qa,Lb = "div",lc = "absolute",Pd = "relative",tb = "hidden",$b = "highcharts-",Ab = "visible",Za = "px",mb = "none",Wa = "M",Ba = "L",Ud = "rgba(192,192,192," + (xc ? 1.0E-6 : 0.0020) + ")",cb = "",xb = "hover",Cc,$c,ad,bd,oc,Dc,Ec,Cd,Dd,cd,Ed,Fd,db = hb.HighchartsAdapter,Cb = db ||
	{},t = Cb.each,zd = Cb.grep,jc = Cb.map,wa = Cb.merge,Ad = Cb.hyphenate,Pa = Cb.addEvent,Bb = Cb.removeEvent,Ja = Cb.fireEvent,Xc = Cb.animate,Sc = Cb.stop,sb = {};
	db && db.init && db.init();
	if (!db && hb.jQuery)
	{
		var kb = jQuery;
		t = function(a, b)
		{
			for (var c = 0,d = a.length; c < d; c++)
			{
				if (b.call(a[c], a[c], c, a) === false)
				{
					return c
				}
			}
		};
		zd = kb.grep;
		jc = function(a, b)
		{
			for (var c = [],d = 0,e = a.length; d < e; d++)
			{
				c[d] = b.call(a[d], a[d], d, a);
			}
			return c
		};
		wa = function()
		{
			var a = arguments;
			return kb.extend(true, null, a[0], a[1], a[2], a[3])
		};
		Ad = function(a)
		{
			return a.replace(/([A-Z])/g,
					function(b, c)
					{
						return"-" + c.toLowerCase()
					})
		};
		Pa = function(a, b, c)
		{
			kb(a).bind(b, c)
		};
		Bb = function(a, b, c)
		{
			var d = za.removeEventListener ? "removeEventListener" : "detachEvent";
			if (za[d] && !a[d])
			{
				a[d] = function()
				{
				};
			}
			kb(a).unbind(b, c)
		};
		Ja = function(a, b, c, d)
		{
			var e = kb.Event(b),f = "detached" + b;
			ma(e, c);
			if (a[b])
			{
				a[f] = a[b];
				a[b] = null
			}
			kb(a).trigger(e);
			if (a[f])
			{
				a[b] = a[f];
				a[f] = null
			}
			d && !e.isDefaultPrevented() && d(e)
		};
		Xc = function(a, b, c)
		{
			var d = kb(a);
			if (b.d)
			{
				a.toD = b.d;
				b.d = 1
			}
			d.stop();
			d.animate(b, c)
		};
		Sc = function(a)
		{
			kb(a).stop()
		};
		kb.extend(kb.easing,
				{easeOutQuad:function(a, b, c, d, e)
				{
					return-d * (b /= e) * (b - 2) + c
				}});
		var de = jQuery.fx.step._default,ee = jQuery.fx.prototype.cur;
		kb.fx.step._default = function(a)
		{
			var b = a.elem;
			b.attr ? b.attr(a.prop, a.now) : de.apply(this, arguments)
		};
		kb.fx.step.d = function(a)
		{
			var b = a.elem;
			if (!a.started)
			{
				var c = Yc.init(b, b.d, b.toD);
				a.start = c[0];
				a.end = c[1];
				a.started = true
			}
			b.attr("d", Yc.step(a.start, a.end, a.pos, b.toD))
		};
		kb.fx.prototype.cur = function()
		{
			var a = this.elem;
			return a.attr ? a.attr(this.prop) : ee.apply(this, arguments)
		}
	}
	Yc = {init:function(a, b, c)
	{
		b = b || "";
		var d = a.shift,e = b.indexOf("C") > -1,f = e ? 7 : 3,g;
		b = b.split(" ");
		c = [].concat(c);
		var i,j,k = function(n)
		{
			for (g = n.length; g--;)
			{
				n[g] == Wa && n.splice(g + 1, 0, n[g + 1], n[g + 2], n[g + 1], n[g + 2])
			}
		};
		if (e)
		{
			k(b);
			k(c)
		}
		if (a.isArea)
		{
			i = b.splice(b.length - 6, 6);
			j = c.splice(c.length - 6, 6)
		}
		if (d)
		{
			c = [].concat(c).splice(0, f).concat(c);
			a.shift = false
		}
		if (b.length)
		{
			for (a = c.length; b.length < a;)
			{
				d = [].concat(b).splice(b.length - f, f);
				if (e)
				{
					d[f - 6] = d[f - 2];
					d[f - 5] = d[f - 1]
				}
				b = b.concat(d)
			}
		}
		if (i)
		{
			b = b.concat(i);
			c = c.concat(j)
		}
		return[b,c]
	},step:function(a, b, c, d)
	{
		var e = [],f = a.length;
		if (c == 1)
		{
			e = d;
		} else if (f == b.length && c < 1)
		{
			for (; f--;)
			{
				d = parseFloat(a[f]);
				e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d
			}
		}
		else
		{
			e = b;
		}
		return e
	}};
	db = {enabled:true,align:"center",x:0,y:15,style:{color:"#666",fontSize:"11px",lineHeight:"14px"}};
	Ra = {colors:["#4572A7","#AA4643","#89A54E","#80699B","#3D96AE","#DB843D","#92A8CD","#A47D7C","#B5CA92"],symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:["January","February","March","April","May","June",
		"July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],decimalPoint:".",resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:true},chart:{borderColor:"#4572A7",borderRadius:5,defaultSeriesType:"line",ignoreHiddenSeries:true,spacingTop:10,spacingRight:10,spacingBottom:15,spacingLeft:10,style:{fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
		fontSize:"12px"},backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0"},title:{text:"Chart title",align:"center",y:15,style:{color:"#3E576F",fontSize:"16px"}},subtitle:{text:"",align:"center",y:30,style:{color:"#6D869F"}},plotOptions:{line:{allowPointSelect:false,showCheckbox:false,animation:{duration:1E3},events:{},lineWidth:2,shadow:true,marker:{enabled:true,lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:wa(db,
			{enabled:false,y:-6,formatter:function()
			{
				return this.y
			}}),showInLegend:true,states:{hover:{marker:{}},select:{marker:{}}},stickyTracking:true}},labels:{style:{position:lc,color:"#3E576F"}},legend:{enabled:true,align:"center",layout:"horizontal",labelFormatter:function()
	{
		return this.name
	},borderWidth:1,borderColor:"#909090",borderRadius:5,shadow:false,style:{padding:"5px"},itemStyle:{cursor:"pointer",color:"#3E576F"},itemHoverStyle:{cursor:"pointer",color:"#000000"},itemHiddenStyle:{color:"#C0C0C0"},
		itemCheckboxStyle:{position:lc,width:"13px",height:"13px"},symbolWidth:16,symbolPadding:5,verticalAlign:"bottom",x:0,y:0},loading:{hideDuration:100,labelStyle:{fontWeight:"bold",position:Pd,top:"1em"},showDuration:100,style:{position:lc,backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:true,backgroundColor:"rgba(255, 255, 255, .85)",borderWidth:2,borderRadius:5,shadow:true,snap:Gb ? 25 : 10,style:{color:"#333333",fontSize:"12px",padding:"5px",whiteSpace:"nowrap"}},toolbar:{itemStyle:{color:"#4572A7",
		cursor:"pointer"}},credits:{enabled:true,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"10px"}}};
	var Lc = {dateTimeLabelFormats:{second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:false,gridLineColor:"#C0C0C0",labels:db,lineColor:"#C0D0E0",lineWidth:1,max:null,min:null,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",
		minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:false,tickColor:"#C0D0E0",tickLength:5,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#6D869F",fontWeight:"bold"}},type:"linear"},fd = wa(Lc, {endOnTick:true,gridLineWidth:1,tickPixelInterval:72,showLastLabel:true,labels:{align:"right",x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:true,tickWidth:0,
		title:{rotation:270,text:"Y-values"}}),Yd = {labels:{align:"right",x:-8,y:null},title:{rotation:270}},Xd = {labels:{align:"left",x:8,y:null},title:{rotation:90}},Ld = {labels:{align:"center",x:0,y:14},title:{rotation:0}},Wd = wa(Ld, {labels:{y:-5}}),vb = Ra.plotOptions;
	db = vb.line;
	vb.spline = wa(db);
	vb.scatter = wa(db, {lineWidth:0,states:{hover:{lineWidth:0}}});
	vb.area = wa(db, {});
	vb.areaspline = wa(vb.area);
	vb.column = wa(db, {borderColor:"#FFFFFF",borderWidth:1,borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,
		minPointLength:0,states:{hover:{brightness:0.1,shadow:false},select:{color:"#C0C0C0",borderColor:"#000000",shadow:false}}});
	vb.bar = wa(vb.column, {dataLabels:{align:"left",x:5,y:0}});
	vb.pie = wa(db, {borderColor:"#FFFFFF",borderWidth:1,center:["50%","50%"],colorByPoint:true,dataLabels:{distance:30,enabled:true,formatter:function()
	{
		return this.point.name
	},y:5},legendType:"point",marker:null,size:"75%",showInLegend:false,slicedOffset:10,states:{hover:{brightness:0.1,shadow:false}}});
	Bd();
	var Vb = function(a)
	{
		var b =
				[],c;
		(function(d)
		{
			if (c = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(d))
			{
				b = [oa(c[1]),oa(c[2]),oa(c[3]),parseFloat(c[4], 10)];
			} else if (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(d))
			{
				b = [oa(c[1], 16),oa(c[2], 16),oa(c[3], 16),1]
			}
		})(a);
		return{get:function(d)
		{
			return b && !isNaN(b[0]) ? d == "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : d == "a" ? b[3] : "rgba(" + b.join(",") + ")" : a
		},brighten:function(d)
		{
			if (bc(d) && d !== 0)
			{
				var e;
				for (e = 0; e < 3; e++)
				{
					b[e] += oa(d * 255);
					if (b[e] <
							0)
					{
						b[e] = 0;
					}
					if (b[e] > 255)
					{
						b[e] = 255
					}
				}
			}
			return this
		},setOpacity:function(d)
		{
			b[3] = d;
			return this
		}}
	};
	Mc = function(a, b, c)
	{
		function d(E)
		{
			return E.toString().replace(/^([0-9])$/, "0$1")
		}

		if (!L(b) || isNaN(b))
		{
			return"Invalid date";
		}
		a = y(a, "%Y-%m-%d %H:%M:%S");
		b = new Date(b * ob);
		var e = b[ad](),f = b[bd](),g = b[oc](),i = b[Dc](),j = b[Ec](),k = Ra.lang,n = k.weekdays;
		k = k.months;
		b = {a:n[f].substr(0, 3),A:n[f],d:d(g),e:g,b:k[i].substr(0, 3),B:k[i],m:d(i + 1),y:j.toString().substr(2, 2),Y:j,H:d(e),I:d(e % 12 || 12),l:e % 12 || 12,M:d(b[$c]()),p:e < 12 ? "AM" :
				"PM",P:e < 12 ? "am" : "pm",S:d(b.getSeconds())};
		for (var z in b)
		{
			a = a.replace("%" + z, b[z]);
		}
		return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
	};
	Hc.prototype = {init:function(a, b)
	{
		this.element = za.createElementNS("http://www.w3.org/2000/svg", b);
		this.renderer = a
	},animate:function(a, b, c)
	{
		if (b = y(b, Bc, true))
		{
			b = wa(b);
			if (c)
			{
				b.complete = c;
			}
			Xc(this, a, b)
		}
		else
		{
			this.attr(a);
			c && c()
		}
	},attr:function(a, b)
	{
		var c,d,e,f,g = this.element,i = g.nodeName,j = this.renderer,k,n = this.shadows,z,E = this;
		if (Ib(a) && L(b))
		{
			c = a;
			a = {};
			a[c] = b
		}
		if (Ib(a))
		{
			c =
					a;
			if (i == "circle")
			{
				c = {x:"cx",y:"cy"}[c] || c;
			} else if (c == "strokeWidth")
			{
				c = "stroke-width";
			}
			E = xa(g, c) || this[c] || 0;
			if (c != "d" && c != "visibility")
			{
				E = parseFloat(E)
			}
		}
		else
		{
			for (c in a)
			{
				k = false;
				d = a[c];
				if (c == "d")
				{
					if (d && d.join)
					{
						d = d.join(" ");
					}
					if (/(NaN| {2}|^$)/.test(d))
					{
						d = "M 0 0";
					}
					this.d = d
				} else if (c == "x" && i == "text")
				{
					for (e = 0; e < g.childNodes.length; e++)
					{
						f = g.childNodes[e];
						xa(f, "x") == xa(g, "x") && xa(f, "x", d)
					}
					if (this.rotation)
					{
						xa(g, "transform", "rotate(" + this.rotation + " " + d + " " + oa(a.y || xa(g, "y")) + ")")
					}
				} else if (c == "fill")
				{
					d = j.color(d, g,
							c);
				} else if (i == "circle" && (c == "x" || c == "y"))
				{
					c = {x:"cx",y:"cy"}[c] || c;
				} else if (c == "translateX" || c == "translateY" || c == "rotation" || c == "verticalAlign")
				{
					this[c] = d;
					this.updateTransform();
					k = true
				} else if (c == "stroke")
				{
					d = j.color(d, g, c);
				} else if (c == "dashstyle")
				{
					c = "stroke-dasharray";
					if (d)
					{
						d = d.toLowerCase().replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/,
								"").split(",");
						for (e = d.length; e--;)
						{
							d[e] = oa(d[e]) * a["stroke-width"];
						}
						d = d.join(",")
					}
				} else if (c == "isTracker")
				{
					this[c] = d;
				} else if (c == "width")
				{
					d = oa(d);
				} else if (c == "align")
				{
					c = "text-anchor";
					d = {left:"start",center:"middle",right:"end"}[d]
				}
				if (c == "strokeWidth")
				{
					c = "stroke-width";
				}
				if (be && c == "stroke-width" && d === 0)
				{
					d = 1.0E-6;
				}
				if (this.symbolName && /^(x|y|r|start|end|innerR)/.test(c))
				{
					if (!z)
					{
						this.symbolAttr(a);
						z = true
					}
					k = true
				}
				if (n && /^(width|height|visibility|x|y|d)$/.test(c))
				{
					for (e = n.length; e--;)
					{
						xa(n[e], c, d);
					}
				}
				if (c == "text")
				{
					this.textStr =
							d;
					j.buildText(this)
				}
				else
				{
					k || xa(g, c, d)
				}
			}
		}
		return E
	},symbolAttr:function(a)
	{
		this.x = y(a.x, this.x);
		this.y = y(a.y, this.y);
		this.r = y(a.r, this.r);
		this.start = y(a.start, this.start);
		this.end = y(a.end, this.end);
		this.width = y(a.width, this.width);
		this.height = y(a.height, this.height);
		this.innerR = y(a.innerR, this.innerR);
		this.attr({d:this.renderer.symbols[this.symbolName](this.x, this.y, this.r, {start:this.start,end:this.end,width:this.width,height:this.height,innerR:this.innerR})})
	},clip:function(a)
	{
		return this.attr("clip-path",
				"url(" + this.renderer.url + "#" + a.id + ")")
	},css:function(a)
	{
		var b = this.element;
		if (a && a.color)
		{
			a.fill = a.color;
		}
		a = ma(this.styles, a);
		Ac && !xc ? La(this.element, a) : this.attr({style:Vd(a)});
		this.styles = a;
		a.width && b.nodeName == "text" && this.added && this.renderer.buildText(this);
		return this
	},on:function(a, b)
	{
		var c = b;
		if (Gb && a == "click")
		{
			a = "touchstart";
			c = function(d)
			{
				d.preventDefault();
				b()
			}
		}
		this.element["on" + a] = c;
		return this
	},translate:function(a, b)
	{
		return this.attr({translateX:a,translateY:b})
	},invert:function()
	{
		this.inverted =
				true;
		this.updateTransform();
		return this
	},updateTransform:function()
	{
		var a = this.translateX || 0,b = this.translateY || 0,c = this.inverted,d = this.rotation,e = [];
		if (c)
		{
			a += this.attr("width");
			b += this.attr("height")
		}
		if (a || b)
		{
			e.push("translate(" + a + "," + b + ")");
		}
		if (c)
		{
			e.push("rotate(90) scale(-1,1)");
		}
		else
		{
			d && e.push("rotate(" + d + " " + this.x + " " + this.y + ")");
		}
		e.length && xa(this.element, "transform", e.join(" "))
	},toFront:function()
	{
		var a = this.element;
		a.parentNode.appendChild(a);
		return this
	},align:function(a, b, c)
	{
		if (a)
		{
			this.alignOptions =
					a;
			this.alignByTranslate = b;
			c || this.renderer.alignedObjects.push(this)
		}
		else
		{
			a = this.alignOptions;
			b = this.alignByTranslate
		}
		c = y(c, this.renderer);
		var d = a.align,e = a.verticalAlign,f = (c.x || 0) + (a.x || 0),g = (c.y || 0) + (a.y || 0),i = {};
		if (/^(right|center)$/.test(d))
		{
			f += (c.width - (a.width || 0)) / {right:1,center:2}[d];
		}
		i[b ? "translateX" : "x"] = f;
		if (/^(bottom|middle)$/.test(e))
		{
			g += (c.height - (a.height || 0)) / ({bottom:1,middle:2}[e] || 1);
		}
		i[b ? "translateY" : "y"] = g;
		this[this.placed ? "animate" : "attr"](i);
		this.placed = true;
		return this
	},getBBox:function()
	{
		var a,
				b,c,d = this.rotation,e = d * Td;
		try
		{
			a = ma({}, this.element.getBBox())
		}
		catch(f)
		{
			a = {width:0,height:0}
		}
		b = a.width;
		c = a.height;
		if (d)
		{
			a.width = ab(c * yb(e)) + ab(b * ub(e));
			a.height = ab(c * ub(e)) + ab(b * yb(e))
		}
		return a
	},show:function()
	{
		return this.attr({visibility:Ab})
	},hide:function()
	{
		return this.attr({visibility:tb})
	},add:function(a)
	{
		var b = this.renderer,c = a || b,d = c.element || b.box,e = d.childNodes,f = this.element,g = xa(f, "zIndex"),i = this.textStr,j;
		this.parentInverted = a && a.inverted;
		if (g)
		{
			c.handleZ = true;
			g = oa(g)
		}
		if (c.handleZ)
		{
			for (j =
						 0; j < e.length; j++)
			{
				a = e[j];
				c = xa(a, "zIndex");
				if (a != f && (oa(c) > g || !L(g) && L(c)))
				{
					d.insertBefore(f, a);
					return this
				}
			}
		}
		if (i !== undefined)
		{
			b.buildText(this);
			this.added = true
		}
		d.appendChild(f);
		return this
	},destroy:function()
	{
		var a = this.element || {},b = this.shadows,c = a.parentNode,d;
		a.onclick = a.onmouseout = a.onmouseover = a.onmousemove = null;
		Sc(this);
		c && c.removeChild(a);
		b && t(b, function(e)
		{
			(c = e.parentNode) && c.removeChild(e)
		});
		mc(this.renderer.alignedObjects, this);
		for (d in this)
		{
			delete this[d];
		}
		return null
	},empty:function()
	{
		for (var a =
				this.element,b = a.childNodes,c = b.length; c--;)
		{
			a.removeChild(b[c])
		}
	},shadow:function(a)
	{
		var b = [],c,d = this.element,e = this.parentInverted ? "(-1,-1)" : "(1,1)";
		if (a)
		{
			for (a = 1; a <= 3; a++)
			{
				c = d.cloneNode(0);
				xa(c, {isShadow:"true",stroke:"rgb(0, 0, 0)","stroke-opacity":0.05 * a,"stroke-width":7 - 2 * a,transform:"translate" + e,fill:mb});
				d.parentNode.insertBefore(c, d);
				b.push(c)
			}
			this.shadows = b
		}
		return this
	}};
	var Uc = function()
	{
		this.init.apply(this, arguments)
	};
	Uc.prototype = {init:function(a, b, c)
	{
		var d = location,e;
		this.Element = Hc;
		e = this.createElement("svg").attr({xmlns:"http://www.w3.org/2000/svg",version:"1.1"});
		a.appendChild(e.element);
		this.box = e.element;
		this.boxWrapper = e;
		this.alignedObjects = [];
		this.url = Ac ? "" : d.href.replace(/#.*?$/, "");
		this.defs = this.createElement("defs").add();
		this.setSize(b, c, false)
	},createElement:function(a)
	{
		var b = new this.Element;
		b.init(this, a);
		return b
	},buildText:function(a)
	{
		var b = a.element,c = y(a.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g,
				"<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br[^>]?>/g),d = b.childNodes,e = /style="([^"]+)"/,f = /href="([^"]+)"/,g = xa(b, "x"),i = (a = a.styles) && oa(a.width),j = a && a.lineHeight,k;
		for (a = d.length; a--;)
		{
			b.removeChild(d[a]);
		}
		i && this.box.appendChild(b);
		t(c, function(n, z)
		{
			var E,ia = 0,T;
			n = n.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
			E = n.split("|||");
			t(E, function(K)
			{
				if (K !== "" || E.length == 1)
				{
					var u = {},A = za.createElementNS("http://www.w3.org/2000/svg", "tspan");
					e.test(K) && xa(A, "style",
							K.match(e)[1].replace(/(;| |^)color([ :])/, "$1fill$2"));
					if (f.test(K))
					{
						xa(A, "onclick", 'location.href="' + K.match(f)[1] + '"');
						La(A, {cursor:"pointer"})
					}
					K = K.replace(/<(.|\n)*?>/g, "") || " ";
					A.appendChild(za.createTextNode(K));
					if (ia)
					{
						u.dx = 3;
					}
					else
					{
						u.x = g;
					}
					if (!ia)
					{
						if (z)
						{
							T = oa(window.getComputedStyle(k, null).getPropertyValue("line-height"));
							if (isNaN(T))
							{
								T = j || k.offsetHeight || 18;
							}
							xa(A, "dy", T)
						}
						k = A
					}
					xa(A, u);
					b.appendChild(A);
					ia++;
					if (i)
					{
						K = K.replace(/-/g, "- ").split(" ");
						for (var ba,ya = []; K.length || ya.length;)
						{
							ba = b.getBBox().width;
							u = ba > i;
							if (!u || K.length == 1)
							{
								K = ya;
								ya = [];
								A = za.createElementNS("http://www.w3.org/2000/svg", "tspan");
								xa(A, {x:g,dy:j || 16});
								b.appendChild(A);
								if (ba > i)
								{
									i = ba
								}
							}
							else
							{
								A.removeChild(A.firstChild);
								ya.unshift(K.pop())
							}
							A.appendChild(za.createTextNode(K.join(" ").replace(/- /g, "-")))
						}
					}
				}
			})
		})
	},crispLine:function(a, b)
	{
		if (a[1] == a[4])
		{
			a[1] = a[4] = V(a[1]) + b % 2 / 2;
		}
		if (a[2] == a[5])
		{
			a[2] = a[5] = V(a[2]) + b % 2 / 2;
		}
		return a
	},path:function(a)
	{
		return this.createElement("path").attr({d:a,fill:mb})
	},circle:function(a, b, c)
	{
		a = Jb(a) ? a : {x:a,y:b,r:c};
		return this.createElement("circle").attr(a)
	},arc:function(a, b, c, d, e, f)
	{
		if (Jb(a))
		{
			b = a.y;
			c = a.r;
			d = a.innerR;
			e = a.start;
			f = a.end;
			a = a.x
		}
		return this.symbol("arc", a || 0, b || 0, c || 0, {innerR:d || 0,start:e || 0,end:f || 0})
	},rect:function(a, b, c, d, e, f)
	{
		if (arguments.length > 1)
		{
			var g = (f || 0) % 2 / 2;
			a = V(a || 0) + g;
			b = V(b || 0) + g;
			c = V((c || 0) - 2 * g);
			d = V((d || 0) - 2 * g)
		}
		g = Jb(a) ? a : {x:a,y:b,width:Ga(c, 0),height:Ga(d, 0)};
		return this.createElement("rect").attr(ma(g, {rx:e || g.r,ry:e || g.r,fill:mb}))
	},setSize:function(a, b, c)
	{
		var d = this.alignedObjects,
				e = d.length;
		this.width = a;
		this.height = b;
		for (this.boxWrapper[y(c, true) ? "animate" : "attr"]({width:a,height:b}); e--;)
		{
			d[e].align()
		}
	},g:function(a)
	{
		return this.createElement("g").attr(L(a) && {"class":$b + a})
	},image:function(a, b, c, d, e)
	{
		var f = {preserveAspectRatio:mb};
		arguments.length > 1 && ma(f, {x:b,y:c,width:d,height:e});
		f = this.createElement("image").attr(f);
		f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a);
		return f
	},symbol:function(a, b, c, d, e)
	{
		var f,g = this.symbols[a];
		g = g && g(b, c, d, e);
		var i = /^url\((.*?)\)$/;
		if (g)
		{
			f = this.path(g);
			ma(f, {symbolName:a,x:b,y:c,r:d});
			e && ma(f, e)
		} else if (i.test(a))
		{
			a = a.match(i)[1];
			f = this.image(a).attr({x:b,y:c});
			eb("img", {onload:function()
			{
				var j = ce[this.src] || [this.width,this.height];
				f.attr({width:j[0],height:j[1]}).translate(-V(j[0] / 2), -V(j[1] / 2))
			},src:a})
		}
		else
		{
			f = this.circle(b, c, d);
		}
		return f
	},symbols:{square:function(a, b, c)
	{
		c = 0.707 * c;
		return[Wa,a - c,b - c,Ba,a + c,b - c,a + c,b + c,a - c,b + c,"Z"]
	},triangle:function(a, b, c)
	{
		return[Wa,a,b - 1.33 * c,Ba,a + c,b + 0.67 * c,a - c,b + 0.67 * c,"Z"]
	},"triangle-down":function(a, b, c)
	{
		return[Wa,a,b + 1.33 * c,Ba,a - c,b - 0.67 * c,a + c,b - 0.67 * c,"Z"]
	},diamond:function(a, b, c)
	{
		return[Wa,a,b - c,Ba,a + c,b,a,b + c,a - c,b,"Z"]
	},arc:function(a, b, c, d)
	{
		var e = d.start,f = d.end - 1.0E-6,g = d.innerR,i = ub(e),j = yb(e),k = ub(f);
		f = yb(f);
		d = d.end - e < Ub ? 0 : 1;
		return[Wa,a + c * i,b + c * j,"A",c,c,0,d,1,a + c * k,b + c * f,Ba,a + g * k,b + g * f,"A",g,g,0,d,0,a + g * i,b + g * j,"Z"]
	}},clipRect:function(a, b, c, d)
	{
		var e = $b + od++,f = this.createElement("clipPath").attr({id:e}).add(this.defs);
		a = this.rect(a, b, c, d, 0).add(f);
		a.id = e;
		return a
	},color:function(a, b, c)
	{
		var d,e = /^rgba/;
		if (a && a.linearGradient)
		{
			var f = this;
			b = a.linearGradient;
			c = $b + od++;
			var g,i,j;
			g = f.createElement("linearGradient").attr({id:c,gradientUnits:"userSpaceOnUse",x1:b[0],y1:b[1],x2:b[2],y2:b[3]}).add(f.defs);
			t(a.stops, function(k)
			{
				if (e.test(k[1]))
				{
					d = Vb(k[1]);
					i = d.get("rgb");
					j = d.get("a")
				}
				else
				{
					i = k[1];
					j = 1
				}
				f.createElement("stop").attr({offset:k[0],"stop-color":i,"stop-opacity":j}).add(g)
			});
			return"url(" + this.url + "#" + c + ")"
		} else if (e.test(a))
		{
			d = Vb(a);
			xa(b, c + "-opacity", d.get("a"));
			return d.get("rgb")
		}
		else
		{
			return a
		}
	},
		text:function(a, b, c)
		{
			var d = Ra.chart.style;
			b = V(y(b, 0));
			c = V(y(c, 0));
			a = this.createElement("text").attr({x:b,y:c,text:a}).css({"font-family":d.fontFamily,"font-size":d.fontSize});
			a.x = b;
			a.y = c;
			return a
		}};
	var Ka;
	if (!xc)
	{
		var fe = wb(Hc, {init:function(a, b)
		{
			var c = ["<",b,' filled="f" stroked="f"'],d = ["position: ",lc,";"];
			if (b == "shape" || b == Lb)
			{
				d.push("left:0;top:0;width:10px;height:10px;");
			}
			if (yc)
			{
				d.push("visibility: ", b == Lb ? tb : Ab);
			}
			c.push(' style="', d.join(""), '"/>');
			if (b)
			{
				c = b == Lb || b == "span" || b == "img" ? c.join("") :
						a.prepVML(c);
				this.element = eb(c)
			}
			this.renderer = a
		},add:function(a)
		{
			var b = this.renderer,c = this.element,d = b.box;
			d = a ? a.element || a : d;
			a && a.inverted && b.invertChild(c, d);
			yc && d.gVis == tb && La(c, {visibility:tb});
			d.appendChild(c);
			this.added = true;
			this.alignOnAdd && this.updateTransform();
			return this
		},attr:function(a, b)
		{
			var c,d,e,f = this.element || {},g = f.style,i = f.nodeName,j = this.renderer,k = this.symbolName,n,z,E = this.shadows,ia = this;
			if (Ib(a) && L(b))
			{
				c = a;
				a = {};
				a[c] = b
			}
			if (Ib(a))
			{
				c = a;
				ia = c == "strokeWidth" || c == "stroke-width" ?
						this.strokeweight : this[c]
			}
			else
			{
				for (c in a)
				{
					d = a[c];
					n = false;
					if (k && /^(x|y|r|start|end|width|height|innerR)/.test(c))
					{
						if (!z)
						{
							this.symbolAttr(a);
							z = true
						}
						n = true
					} else if (c == "d")
					{
						d = d || [];
						this.d = d.join(" ");
						e = d.length;
						for (n = []; e--;)
						{
							n[e] = bc(d[e]) ? V(d[e] * 10) - 5 : d[e] == "Z" ? "x" : d[e];
						}
						d = n.join(" ") || "x";
						f.path = d;
						if (E)
						{
							for (e = E.length; e--;)
							{
								E[e].path = d;
							}
						}
						n = true
					} else if (c == "zIndex" || c == "visibility")
					{
						if (yc && c == "visibility" && i == "DIV")
						{
							f.gVis = d;
							n = f.childNodes;
							for (e = n.length; e--;)
							{
								La(n[e], {visibility:d});
							}
							if (d == Ab)
							{
								d = null
							}
						}
						if (d)
						{
							g[c] =
									d;
						}
						n = true
					} else if (/^(width|height)$/.test(c))
					{
						if (this.updateClipping)
						{
							this[c] = d;
							this.updateClipping()
						}
						else
						{
							g[c] = d;
						}
						n = true
					} else if (/^(x|y)$/.test(c))
					{
						this[c] = d;
						if (f.tagName == "SPAN")
						{
							this.updateTransform();
						}
						else
						{
							g[{x:"left",y:"top"}[c]] = d
						}
					} else if (c == "class")
					{
						f.className = d;
					} else if (c == "stroke")
					{
						d = j.color(d, f, c);
						c = "strokecolor"
					} else if (c == "stroke-width" || c == "strokeWidth")
					{
						f.stroked = d ? true : false;
						c = "strokeweight";
						this[c] = d;
						if (bc(d))
						{
							d += Za
						}
					} else if (c == "dashstyle")
					{
						(f.getElementsByTagName("stroke")[0] || eb(j.prepVML(["<stroke/>"]),
								null, null, f))[c] = d || "solid";
						this.dashstyle = d;
						n = true
					} else if (c == "fill")
					{
						if (i == "SPAN")
						{
							g.color = d;
						}
						else
						{
							f.filled = d != mb ? true : false;
							d = j.color(d, f, c);
							c = "fillcolor"
						}
					} else if (c == "translateX" || c == "translateY" || c == "rotation" || c == "align")
					{
						if (c == "align")
						{
							c = "textAlign";
						}
						this[c] = d;
						this.updateTransform();
						n = true
					} else if (c == "text")
					{
						f.innerHTML = d;
						n = true
					}
					if (E && c == "visibility")
					{
						for (e = E.length; e--;)
						{
							E[e].style[c] = d;
						}
					}
					if (!n)
					{
						if (yc)
						{
							f[c] = d;
						}
						else
						{
							xa(f, c, d)
						}
					}
				}
			}
			return ia
		},clip:function(a)
		{
			var b = this,c = a.members;
			c.push(b);
			b.destroyClip = function()
			{
				mc(c,
						b)
			};
			return b.css(a.getCSS(b.inverted))
		},css:function(a)
		{
			var b = this.element;
			(b = a && a.width && b.tagName == "SPAN") && ma(a, {display:"block",whiteSpace:"normal"});
			this.styles = ma(this.styles, a);
			La(this.element, a);
			b && this.updateTransform();
			return this
		},destroy:function()
		{
			this.destroyClip && this.destroyClip();
			Hc.prototype.destroy.apply(this)
		},empty:function()
		{
			for (var a = this.element.childNodes,b = a.length,c; b--;)
			{
				c = a[b];
				c.parentNode.removeChild(c)
			}
		},getBBox:function()
		{
			var a = this.element;
			if (a.nodeName == "text")a.style.position =
					lc;
			return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}
		},on:function(a, b)
		{
			this.element["on" + a] = function()
			{
				var c = hb.event;
				c.target = c.srcElement;
				b(c)
			};
			return this
		},updateTransform:function()
		{
			if (this.added)
			{
				var a = this,b = a.element,c = a.translateX || 0,d = a.translateY || 0,e = a.x || 0,f = a.y || 0,g = a.textAlign || "left",i = {left:0,center:0.5,right:1}[g],j = g && g != "left";
				if (c || d)a.css({marginLeft:c,marginTop:d});
				a.inverted && t(b.childNodes, function(A)
				{
					a.renderer.invertChild(A, b)
				});
				if (b.tagName ==
						"SPAN")
				{
					var k,n;
					c = a.rotation;
					var z;
					k = 0;
					d = 1;
					var E = 0,ia,T = a.xCorr || 0,K = a.yCorr || 0,u = [c,g,b.innerHTML,b.style.width].join(",");
					if (u != a.cTT)
					{
						if (L(c))
						{
							k = c * Td;
							d = ub(k);
							E = yb(k);
							La(b, {filter:c ? ["progid:DXImageTransform.Microsoft.Matrix(M11=",d,", M12=",-E,", M21=",E,", M22=",d,", sizingMethod='auto expand')"].join("") : mb})
						}
						k = b.offsetWidth;
						n = b.offsetHeight;
						z = V(oa(b.style.fontSize || 12) * 1.2);
						T = d < 0 && -k;
						K = E < 0 && -n;
						ia = d * E < 0;
						T += E * z * (ia ? 1 - i : i);
						K -= d * z * (c ? ia ? i : 1 - i : 1);
						if (j)
						{
							T -= k * i * (d < 0 ? -1 : 1);
							if (c)K -= n * i * (E < 0 ? -1 : 1);
							La(b,
									{textAlign:g})
						}
						a.xCorr = T;
						a.yCorr = K
					}
					La(b, {left:e + T,top:f + K});
					a.cTT = u
				}
			}
			else this.alignOnAdd = true
		},shadow:function(a)
		{
			var b = [],c = this.element,d = this.renderer,e,f = c.style,g,i = c.path;
			if ("" + c.path === "")i = "x";
			if (a)
			{
				for (a = 1; a <= 3; a++)
				{
					g = ['<shape isShadow="true" strokeweight="',7 - 2 * a,'" filled="false" path="',i,'" coordsize="100,100" style="',c.style.cssText,'" />'];
					e = eb(d.prepVML(g), null, {left:oa(f.left) + 1,top:oa(f.top) + 1});
					g = ['<stroke color="black" opacity="',0.05 * a,'"/>'];
					eb(d.prepVML(g), null, null, e);
					c.parentNode.insertBefore(e,
							c);
					b.push(e)
				}
				this.shadows = b
			}
			return this
		}});
		Ka = function()
		{
			this.init.apply(this, arguments)
		};
		Ka.prototype = wa(Uc.prototype, {isIE8:wc.indexOf("MSIE 8.0") > -1,init:function(a, b, c)
		{
			var d;
			this.Element = fe;
			this.alignedObjects = [];
			d = this.createElement(Lb);
			a.appendChild(d.element);
			this.box = d.element;
			this.boxWrapper = d;
			this.setSize(b, c, false);
			if (!za.namespaces.hcv)
			{
				za.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
				za.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
			}
		},
			clipRect:function(a, b, c, d)
			{
				var e = this.createElement();
				return ma(e, {members:[],left:a,top:b,width:c,height:d,getCSS:function(f)
				{
					var g = this.top,i = this.left,j = i + this.width,k = g + this.height;
					g = {clip:"rect(" + V(f ? i : g) + "px," + V(f ? k : j) + "px," + V(f ? j : k) + "px," + V(f ? g : i) + "px)"};
					!f && yc && ma(g, {width:j + Za,height:k + Za});
					return g
				},updateClipping:function()
				{
					t(e.members, function(f)
					{
						f.css(e.getCSS(f.inverted))
					})
				}})
			},color:function(a, b, c)
			{
				var d,e = /^rgba/;
				if (a && a.linearGradient)
				{
					var f,g,i = a.linearGradient,j,k,n,z;
					t(a.stops,
							function(E, ia)
							{
								if (e.test(E[1]))
								{
									d = Vb(E[1]);
									f = d.get("rgb");
									g = d.get("a")
								}
								else
								{
									f = E[1];
									g = 1
								}
								if (ia)
								{
									n = f;
									z = g
								}
								else
								{
									j = f;
									k = g
								}
							});
					a = 90 - Ta.atan((i[3] - i[1]) / (i[2] - i[0])) * 180 / Ub;
					c = ["<",c,' colors="0% ',j,",100% ",n,'" angle="',a,'" opacity="',z,'" o:opacity2="',k,'" type="gradient" focus="100%" />'];
					eb(this.prepVML(c), null, null, b)
				} else if (e.test(a) && b.tagName != "IMG")
				{
					d = Vb(a);
					c = ["<",c,' opacity="',d.get("a"),'"/>'];
					eb(this.prepVML(c), null, null, b);
					return d.get("rgb")
				}
				else return a
			},prepVML:function(a)
			{
				var b = this.isIE8;
				a = a.join("");
				if (b)
				{
					a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />');
					a = a.indexOf('style="') == -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')
				}
				else a = a.replace("<", "<hcv:");
				return a
			},text:function(a, b, c)
			{
				var d = Ra.chart.style;
				return this.createElement("span").attr({text:a,x:V(b),y:V(c)}).css({whiteSpace:"nowrap",fontFamily:d.fontFamily,fontSize:d.fontSize})
			},path:function(a)
			{
				return this.createElement("shape").attr({coordsize:"100 100",
					d:a})
			},circle:function(a, b, c)
			{
				return this.path(this.symbols.circle(a, b, c))
			},g:function(a)
			{
				var b;
				if (a)b = {className:$b + a,"class":$b + a};
				return this.createElement(Lb).attr(b)
			},image:function(a, b, c, d, e)
			{
				var f = this.createElement("img").attr({src:a});
				arguments.length > 1 && f.css({left:b,top:c,width:d,height:e});
				return f
			},rect:function(a, b, c, d, e, f)
			{
				if (arguments.length > 1)
				{
					var g = (f || 0) % 2 / 2;
					a = V(a || 0) + g;
					b = V(b || 0) + g;
					c = V((c || 0) - 2 * g);
					d = V((d || 0) - 2 * g)
				}
				if (Jb(a))
				{
					b = a.y;
					c = a.width;
					d = a.height;
					e = a.r;
					a = a.x
				}
				return this.symbol("rect",
						a || 0, b || 0, e || 0, {width:c || 0,height:d || 0})
			},invertChild:function(a, b)
			{
				var c = b.style;
				La(a, {flip:"x",left:oa(c.width) - 10,top:oa(c.height) - 10,rotation:-90})
			},symbols:{arc:function(a, b, c, d)
			{
				var e = d.start,f = d.end,g = ub(e),i = yb(e),j = ub(f),k = yb(f);
				d = d.innerR;
				if (f - e === 0)return["x"]; else if (f - e == 2 * Ub)j = -0.07 / c;
				return["wa",a - c,b - c,a + c,b + c,a + c * g,b + c * i,a + c * j,b + c * k,"at",a - d,b - d,a + d,b + d,a + d * j,b + d * k,a + d * g,b + d * i,"x","e"]
			},circle:function(a, b, c)
			{
				return["wa",a - c,b - c,a + c,b + c,a + c,b,a + c,b,"e"]
			},rect:function(a, b, c, d)
			{
				var e =
						d.width;
				d = d.height;
				var f = a + e,g = b + d;
				c = nb(c, e, d);
				return[Wa,a + c,b,Ba,f - c,b,"wa",f - 2 * c,b,f,b + 2 * c,f - c,b,f,b + c,Ba,f,g - c,"wa",f - 2 * c,g - 2 * c,f,g,f,g - c,f - c,g,Ba,a + c,g,"wa",a,g - 2 * c,a + 2 * c,g,a + c,g,a,g - c,Ba,a,b + c,"wa",a,b,a + 2 * c,b + 2 * c,a,b + c,a + c,b,"x","e"]
			}}})
	}
	var Qd = xc ? Uc : Ka;
	Hd.prototype.callbacks = [];
	var zc = function()
	{
	};
	zc.prototype = {init:function(a, b)
	{
		var c;
		this.series = a;
		this.applyOptions(b);
		this.pointAttr = {};
		if (a.options.colorByPoint)
		{
			c = a.chart.options.colors;
			if (!this.options)this.options = {};
			this.color = this.options.color =
					this.color || c[Hb++];
			if (Hb >= c.length)Hb = 0
		}
		a.chart.pointCount++;
		return this
	},applyOptions:function(a)
	{
		var b = this.series;
		this.config = a;
		if (bc(a) || a === null)this.y = a; else if (Jb(a) && !bc(a.length))
		{
			ma(this, a);
			this.options = a
		} else if (Ib(a[0]))
		{
			this.name = a[0];
			this.y = a[1]
		} else if (bc(a[0]))
		{
			this.x = a[0];
			this.y = a[1]
		}
		if (this.x === Qa)this.x = b.autoIncrement()
	},destroy:function()
	{
		var a = this,b = a.series,c;
		b.chart.pointCount--;
		a == b.chart.hoverPoint && a.onMouseOut();
		b.chart.hoverPoints = null;
		Bb(a);
		t(["graphic","tracker","group",
			"dataLabel","connector"], function(d)
		{
			a[d] && a[d].destroy()
		});
		a.legendItem && a.series.chart.legend.destroyItem(a);
		for (c in a)a[c] = null
	},select:function(a, b)
	{
		var c = this,d = c.series.chart;
		c.selected = a = y(a, !c.selected);
		c.firePointEvent(a ? "select" : "unselect");
		c.setState(a && "select");
		b || t(d.getSelectedPoints(), function(e)
		{
			if (e.selected && e != c)
			{
				e.selected = false;
				e.setState(cb);
				e.firePointEvent("unselect")
			}
		})
	},onMouseOver:function()
	{
		var a = this.series.chart,b = a.tooltip,c = a.hoverPoint;
		c && c != this && c.onMouseOut();
		this.firePointEvent("mouseOver");
		b && !b.shared && b.refresh(this);
		this.setState(xb);
		a.hoverPoint = this
	},onMouseOut:function()
	{
		this.firePointEvent("mouseOut");
		this.setState();
		this.series.chart.hoverPoint = null
	},tooltipFormatter:function(a)
	{
		var b = this.series;
		return['<span style="color:' + b.color + '">',this.name || b.name,"</span>: ",!a ? "<b>x = " + (this.name || this.x) + ",</b> " : "","<b>",!a ? "y = " : "",this.y,"</b><br/>"].join("")
	},update:function(a, b, c)
	{
		var d = this,e = d.series,f = e.chart;
		Kb(c, f);
		b = y(b, true);
		d.firePointEvent("update",
				{options:a}, function()
				{
					d.applyOptions(a);
					e.isDirty = true;
					b && f.redraw()
				})
	},remove:function(a, b)
	{
		var c = this,d = c.series,e = d.chart,f = d.data;
		Kb(b, e);
		a = y(a, true);
		c.firePointEvent("remove", null, function()
		{
			mc(f, c);
			c.destroy();
			d.isDirty = true;
			a && e.redraw()
		})
	},firePointEvent:function(a, b, c)
	{
		var d = this,e = this.series.options;
		if (e.point.events[a] || d.options && d.options.events && d.options.events[a])this.importEvents();
		if (a == "click" && e.allowPointSelect)c = function(f)
		{
			d.select(null, f.ctrlKey || f.metaKey || f.shiftKey)
		};
		Ja(this, a, b, c)
	},importEvents:function()
	{
		if (!this.hasImportedEvents)
		{
			var a = wa(this.series.options.point, this.options).events,b;
			this.events = a;
			for (b in a)Pa(this, b, a[b]);
			this.hasImportedEvents = true
		}
	},setState:function(a)
	{
		var b = this.series,c = b.options.states,d = vb[b.type].marker && b.options.marker,e = d && !d.enabled,f = (d = d && d.states[a]) && d.enabled === false,g = b.stateMarkerGraphic,i = b.chart,j = this.pointAttr;
		a || (a = cb);
		if (!(a == this.state || this.selected && a != "select" || c[a] && c[a].enabled === false || a && (f || e && !d.enabled)))
		{
			if (this.graphic)this.graphic.attr(j[a]);
			else
			{
				if (a)
				{
					if (!g)b.stateMarkerGraphic = g = i.renderer.circle(0, 0, j[a].r).attr(j[a]).add(b.group);
					g.translate(this.plotX, this.plotY)
				}
				if (g)g[a ? "show" : "hide"]()
			}
			this.state = a
		}
	}};
	var lb = function()
	{
	};
	lb.prototype = {isCartesian:true,type:"line",pointClass:zc,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},init:function(a, b)
	{
		var c,d;
		d = a.series.length;
		this.chart = a;
		b = this.setOptions(b);
		ma(this, {index:d,options:b,name:b.name || "Series " + (d + 1),state:cb,pointAttr:{},visible:b.visible !==
				false,selected:b.selected === true});
		d = b.events;
		for (c in d)Pa(this, c, d[c]);
		if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect)a.runTrackerClick = true;
		this.getColor();
		this.getSymbol();
		this.setData(b.data, false)
	},autoIncrement:function()
	{
		var a = this.options,b = this.xIncrement;
		b = y(b, a.pointStart, 0);
		this.pointInterval = y(this.pointInterval, a.pointInterval, 1);
		this.xIncrement = b + this.pointInterval;
		return b
	},cleanData:function()
	{
		var a = this.chart,b = this.data,c,d,e = a.smallestInterval,
				f,g;
		b.sort(function(i, j)
		{
			return i.x - j.x
		});
		for (g = b.length - 1; g >= 0; g--)b[g - 1] && b[g - 1].x == b[g].x && b.splice(g - 1, 1);
		for (g = b.length - 1; g >= 0; g--)if (b[g - 1])
		{
			f = b[g].x - b[g - 1].x;
			if (d === Qa || f < d)
			{
				d = f;
				c = g
			}
		}
		if (e === Qa || d < e)a.smallestInterval = d;
		this.closestPoints = c
	},getSegments:function()
	{
		var a = -1,b = [],c = this.data;
		t(c, function(d, e)
		{
			if (d.y === null)
			{
				e > a + 1 && b.push(c.slice(a + 1, e));
				a = e
			}
			else e == c.length - 1 && b.push(c.slice(a + 1, e + 1))
		});
		this.segments = b
	},setOptions:function(a)
	{
		var b = this.chart.options.plotOptions;
		return wa(b[this.type],
				b.series, a)
	},getColor:function()
	{
		var a = this.chart.options.colors;
		this.color = this.options.color || a[Hb++] || "#0000ff";
		if (Hb >= a.length)Hb = 0
	},getSymbol:function()
	{
		var a = this.chart.options.symbols;
		this.symbol = this.options.marker.symbol || a[Wc++];
		if (Wc >= a.length)Wc = 0
	},addPoint:function(a, b, c, d)
	{
		var e = this.data,f = this.graph,g = this.area,i = this.chart;
		a = (new this.pointClass).init(this, a);
		Kb(d, i);
		if (f && c)f.shift = c;
		if (g)
		{
			g.shift = c;
			g.isArea = true
		}
		b = y(b, true);
		e.push(a);
		c && e[0].remove(false);
		this.isDirty = true;
		b && i.redraw()
	},
		setData:function(a, b)
		{
			var c = this,d = c.data,e = c.initialColor,f = c.chart,g = d && d.length || 0;
			c.xIncrement = null;
			if (L(e))Hb = e;
			for (a = jc(nc(a || []), function(i)
			{
				return(new c.pointClass).init(c, i)
			}); g--;)d[g].destroy();
			c.data = a;
			c.cleanData();
			c.getSegments();
			c.isDirty = true;
			f.isDirtyBox = true;
			y(b, true) && f.redraw(false)
		},remove:function(a, b)
		{
			var c = this,d = c.chart;
			a = y(a, true);
			if (!c.isRemoving)
			{
				c.isRemoving = true;
				Ja(c, "remove", null, function()
				{
					c.destroy();
					d.isDirtyLegend = d.isDirtyBox = true;
					a && d.redraw(b)
				})
			}
			c.isRemoving =
					false
		},translate:function()
		{
			for (var a = this.chart,b = this.options.stacking,c = this.xAxis.categories,d = this.yAxis,e = this.data,f = e.length; f--;)
			{
				var g = e[f],i = g.x,j = g.y,k = g.low,n = d.stacks[(j < 0 ? "-" : "") + this.stackKey];
				g.plotX = this.xAxis.translate(i);
				if (b && this.visible && n[i])
				{
					k = n[i];
					i = k.total;
					k.cum = k = k.cum - j;
					j = k + j;
					if (b == "percent")
					{
						k = i ? k * 100 / i : 0;
						j = i ? j * 100 / i : 0
					}
					g.percentage = i ? g.y * 100 / i : 0;
					g.stackTotal = i
				}
				if (L(k))g.yBottom = d.translate(k, 0, 1);
				if (j !== null)g.plotY = d.translate(j, 0, 1);
				g.clientX = a.inverted ? a.plotHeight -
						g.plotX : g.plotX;
				g.category = c && c[g.x] !== Qa ? c[g.x] : g.x
			}
		},setTooltipPoints:function(a)
		{
			var b = this.chart,c = b.inverted,d = [],e = V((c ? b.plotTop : b.plotLeft) + b.plotSizeX),f,g,i = [];
			if (a)this.tooltipPoints = null;
			t(this.segments, function(j)
			{
				d = d.concat(j)
			});
			if (this.xAxis && this.xAxis.reversed)d = d.reverse();
			t(d, function(j, k)
			{
				f = d[k - 1] ? d[k - 1].high + 1 : 0;
				for (g = j.high = d[k + 1] ? Mb((j.plotX + (d[k + 1] ? d[k + 1].plotX : e)) / 2) : e; f <= g;)i[c ? e - f++ : f++] = j
			});
			this.tooltipPoints = i
		},onMouseOver:function()
		{
			var a = this.chart,b = a.hoverSeries;
			if (!(!Gb &&
					a.mouseIsDown))
			{
				b && b != this && b.onMouseOut();
				this.options.events.mouseOver && Ja(this, "mouseOver");
				this.tracker && this.tracker.toFront();
				this.setState(xb);
				a.hoverSeries = this
			}
		},onMouseOut:function()
		{
			var a = this.options,b = this.chart,c = b.tooltip,d = b.hoverPoint;
			d && d.onMouseOut();
			this && a.events.mouseOut && Ja(this, "mouseOut");
			c && !a.stickyTracking && c.hide();
			this.setState();
			b.hoverSeries = null
		},animate:function(a)
		{
			var b = this.chart,c = this.clipRect,d = this.options.animation;
			if (d && !Jb(d))d = {};
			if (a)
			{
				if (!c.isAnimating)
				{
					c.attr("width",
							0);
					c.isAnimating = true
				}
			}
			else
			{
				c.animate({width:b.plotSizeX}, d);
				this.animate = null
			}
		},drawPoints:function()
		{
			var a,b = this.data,c = this.chart,d,e,f,g,i,j;
			if (this.options.marker.enabled)for (f = b.length; f--;)
			{
				g = b[f];
				d = g.plotX;
				e = g.plotY;
				j = g.graphic;
				if (e !== Qa && !isNaN(e))
				{
					a = g.pointAttr[g.selected ? "select" : cb];
					i = a.r;
					if (j)j.animate({x:d,y:e,r:i});
					else g.graphic = c.renderer.symbol(y(g.marker && g.marker.symbol, this.symbol), d, e, i).attr(a).add(this.group)
				}
			}
		},convertAttribs:function(a, b, c, d)
		{
			var e = this.pointAttrToOptions,
					f,g,i = {};
			a = a || {};
			b = b || {};
			c = c || {};
			d = d || {};
			for (f in e)
			{
				g = e[f];
				i[f] = y(a[g], b[f], c[f], d[f])
			}
			return i
		},getAttribs:function()
		{
			var a = this,b = vb[a.type].marker ? a.options.marker : a.options,c = b.states,d = c[xb],e,f = a.color,g = {stroke:f,fill:f},i = a.data,j = [],k,n = a.pointAttrToOptions;
			if (a.options.marker)
			{
				d.radius = d.radius || b.radius + 2;
				d.lineWidth = d.lineWidth || b.lineWidth + 1
			}
			else d.color = d.color || Vb(d.color || f).brighten(d.brightness).get();
			j[cb] = a.convertAttribs(b, g);
			t([xb,"select"], function(E)
			{
				j[E] = a.convertAttribs(c[E],
						j[cb])
			});
			a.pointAttr = j;
			for (f = i.length; f--;)
			{
				g = i[f];
				if ((b = g.options && g.options.marker || g.options) && b.enabled === false)b.radius = 0;
				e = false;
				if (g.options)for (var z in n)if (L(b[n[z]]))e = true;
				if (e)
				{
					k = [];
					c = b.states || {};
					e = c[xb] = c[xb] || {};
					if (!a.options.marker)e.color = Vb(e.color || g.options.color).brighten(e.brightness || d.brightness).get();
					k[cb] = a.convertAttribs(b, j[cb]);
					k[xb] = a.convertAttribs(c[xb], j[xb], k[cb]);
					k.select = a.convertAttribs(c.select, j.select, k[cb])
				}
				else k = j;
				g.pointAttr = k
			}
		},destroy:function()
		{
			var a =
					this,b = a.chart,c = /\/5[0-9\.]+ Safari\//.test(wc),d,e;
			Bb(a);
			a.legendItem && a.chart.legend.destroyItem(a);
			t(a.data, function(f)
			{
				f.destroy()
			});
			t(["area","graph","dataLabelsGroup","group","tracker"], function(f)
			{
				if (a[f])
				{
					d = c && f == "group" ? "hide" : "destroy";
					a[f][d]()
				}
			});
			if (b.hoverSeries == a)b.hoverSeries = null;
			mc(b.series, a);
			for (e in a)delete a[e]
		},drawDataLabels:function()
		{
			if (this.options.dataLabels.enabled)
			{
				var a = this,b,c,d = a.data,e = a.options.dataLabels,f,g = a.dataLabelsGroup,i = a.chart,j = i.inverted,k = a.type,
						n;
				if (!g)g = a.dataLabelsGroup = i.renderer.g($b + "data-labels").attr({visibility:a.visible ? Ab : tb,zIndex:5}).translate(i.plotLeft, i.plotTop).add();
				n = e.color;
				if (n == "auto")n = null;
				e.style.color = y(n, a.color);
				t(d, function(z)
				{
					var E = z.barX;
					E = E && E + z.barW / 2 || z.plotX || -999;
					var ia = y(z.plotY, -999),T = z.dataLabel,K = e.align;
					f = e.formatter.call({x:z.x,y:z.y,series:a,point:z,percentage:z.percentage,total:z.total || z.stackTotal});
					b = (j ? i.plotWidth - ia : E) + e.x;
					c = (j ? i.plotHeight - E : ia) + e.y;
					if (k == "column")b += {left:-1,right:1}[K] *
							z.barW / 2 || 0;
					if (T)T.animate({x:b,y:c}); else if (f)T = z.dataLabel = i.renderer.text(f, b, c).attr({align:K,rotation:e.rotation,zIndex:1}).css(e.style).add(g);
					j && !e.y && T.attr({y:c + parseInt(T.styles.lineHeight) * 0.9 - T.getBBox().height / 2})
				})
			}
		},drawGraph:function()
		{
			var a = this,b = a.options,c = a.graph,d = [],e,f = a.area,g = a.group,i = b.lineColor || a.color,j = b.lineWidth,k = b.dashStyle,n,z = a.chart.renderer,E = a.yAxis.getThreshold(b.threshold || 0),ia = /^area/.test(a.type),T = [],K = [];
			t(a.segments, function(u)
			{
				n = [];
				t(u, function(ea, qa)
				{
					if (a.getPointSpline)n.push.apply(n, a.getPointSpline(u, ea, qa));
					else
					{
						n.push(qa ? Ba : Wa);
						qa && b.step && n.push(ea.plotX, u[qa - 1].plotY);
						n.push(ea.plotX, ea.plotY)
					}
				});
				if (u.length > 1)d = d.concat(n);
				else T.push(u[0]);
				if (ia)
				{
					var A = [],ba,ya = n.length;
					for (ba = 0; ba < ya; ba++)A.push(n[ba]);
					ya == 3 && A.push(Ba, n[1], n[2]);
					if (b.stacking && a.type != "areaspline")for (ba = u.length - 1; ba >= 0; ba--)A.push(u[ba].plotX, u[ba].yBottom);
					else A.push(Ba, u[u.length - 1].plotX, E, Ba, u[0].plotX, E);
					K = K.concat(A)
				}
			});
			a.graphPath = d;
			a.singlePoints = T;
			if (ia)
			{
				e =
						y(b.fillColor, Vb(a.color).setOpacity(b.fillOpacity || 0.75).get());
				if (f)f.animate({d:K});
				else a.area = a.chart.renderer.path(K).attr({fill:e}).add(g)
			}
			if (c)c.animate({d:d}); else if (j)
			{
				c = {stroke:i,"stroke-width":j};
				if (k)c.dashstyle = k;
				a.graph = z.path(d).attr(c).add(g).shadow(b.shadow)
			}
		},render:function()
		{
			var a = this,b = a.chart,c,d,e = a.options,f = e.animation,g = f && a.animate;
			f = g ? f && f.duration || 500 : 0;
			var i = a.clipRect;
			d = b.renderer;
			if (!i)
			{
				i = a.clipRect = !b.hasRendered && b.clipRect ? b.clipRect : d.clipRect(0, 0, b.plotSizeX,
						b.plotSizeY);
				if (!b.clipRect)b.clipRect = i
			}
			if (!a.group)
			{
				c = a.group = d.g("series");
				if (b.inverted)
				{
					d = function()
					{
						c.attr({width:b.plotWidth,height:b.plotHeight}).invert()
					};
					d();
					Pa(b, "resize", d)
				}
				c.clip(a.clipRect).attr({visibility:a.visible ? Ab : tb,zIndex:e.zIndex}).translate(b.plotLeft, b.plotTop).add(b.seriesGroup)
			}
			a.drawDataLabels();
			g && a.animate(true);
			a.getAttribs();
			a.drawGraph && a.drawGraph();
			a.drawPoints();
			a.options.enableMouseTracking !== false && a.drawTracker();
			g && a.animate();
			setTimeout(function()
			{
				i.isAnimating =
						false;
				if ((c = a.group) && i != b.clipRect && i.renderer)
				{
					c.clip(a.clipRect = b.clipRect);
					i.destroy()
				}
			}, f);
			a.isDirty = false
		},redraw:function()
		{
			var a = this.chart,b = this.group;
			if (b)
			{
				a.inverted && b.attr({width:a.plotWidth,height:a.plotHeight});
				b.animate({translateX:a.plotLeft,translateY:a.plotTop})
			}
			this.translate();
			this.setTooltipPoints(true);
			this.render()
		},setState:function(a)
		{
			var b = this.options,c = this.graph,d = b.states;
			b = b.lineWidth;
			a = a || cb;
			if (this.state != a)
			{
				this.state = a;
				if (!(d[a] && d[a].enabled === false))
				{
					if (a)b =
							d[a].lineWidth || b + 1;
					if (c && !c.dashstyle)c.attr({"stroke-width":b}, a ? 0 : 500)
				}
			}
		},setVisible:function(a, b)
		{
			var c = this.chart,d = this.legendItem,e = this.group,f = this.tracker,g = this.dataLabelsGroup,i,j = this.data,k = c.options.chart.ignoreHiddenSeries;
			i = this.visible;
			i = (this.visible = a = a === Qa ? !i : a) ? "show" : "hide";
			e && e[i]();
			if (f)f[i]();
			else for (e = j.length; e--;)
			{
				f = j[e];
				f.tracker && f.tracker[i]()
			}
			g && g[i]();
			d && c.legend.colorizeItem(this, a);
			this.isDirty = true;
			this.options.stacking && t(c.series, function(n)
			{
				if (n.options.stacking &&
						n.visible)n.isDirty = true
			});
			if (k)c.isDirtyBox = true;
			b !== false && c.redraw();
			Ja(this, i)
		},show:function()
		{
			this.setVisible(true)
		},hide:function()
		{
			this.setVisible(false)
		},select:function(a)
		{
			this.selected = a = a === Qa ? !this.selected : a;
			if (this.checkbox)this.checkbox.checked = a;
			Ja(this, a ? "select" : "unselect")
		},drawTracker:function()
		{
			var a = this,b = a.options,c = [].concat(a.graphPath),d = c.length,e = a.chart,f = e.options.tooltip.snap,g = a.tracker,i = b.cursor;
			i = i && {cursor:i};
			var j = a.singlePoints,k;
			if (d)for (k = d + 1; k--;)
			{
				c[k] ==
						Wa && c.splice(k + 1, 0, c[k + 1] - f, c[k + 2], Ba);
				if (k && c[k] == Wa || k == d)c.splice(k, 0, Ba, c[k - 2] + f, c[k - 1])
			}
			for (k = 0; k < j.length; k++)
			{
				d = j[k];
				c.push(Wa, d.plotX - f, d.plotY, Ba, d.plotX + f, d.plotY)
			}
			if (g)g.attr({d:c});
			else a.tracker = e.renderer.path(c).attr({isTracker:true,stroke:Ud,fill:mb,"stroke-width":b.lineWidth + 2 * f,visibility:a.visible ? Ab : tb,zIndex:1}).on(Gb ? "touchstart" : "mouseover",
					function()
					{
						e.hoverSeries != a && a.onMouseOver()
					}).on("mouseout",
					function()
					{
						b.stickyTracking || a.onMouseOut()
					}).css(i).add(e.trackerGroup)
		}};
	Ka = wb(lb);
	sb.line = Ka;
	Ka = wb(lb, {type:"area"});
	sb.area = Ka;
	Ka = wb(lb, {type:"spline",getPointSpline:function(a, b, c)
	{
		var d = b.plotX,e = b.plotY,f = a[c - 1],g = a[c + 1],i,j,k,n;
		if (c && c < a.length - 1)
		{
			a = f.plotY;
			k = g.plotX;
			g = g.plotY;
			var z;
			i = (1.5 * d + f.plotX) / 2.5;
			j = (1.5 * e + a) / 2.5;
			k = (1.5 * d + k) / 2.5;
			n = (1.5 * e + g) / 2.5;
			z = (n - j) * (k - d) / (k - i) + e - n;
			j += z;
			n += z;
			if (j > a && j > e)
			{
				j = Ga(a, e);
				n = 2 * e - j
			} else if (j < a && j < e)
			{
				j = nb(a, e);
				n = 2 * e - j
			}
			if (n > g && n > e)
			{
				n = Ga(g, e);
				j = 2 * e - n
			} else if (n < g && n < e)
			{
				n = nb(g, e);
				j = 2 * e - n
			}
			b.rightContX = k;
			b.rightContY = n
		}
		if (c)
		{
			b = ["C",f.rightContX ||
					f.plotX,f.rightContY || f.plotY,i || d,j || e,d,e];
			f.rightContX = f.rightContY = null
		}
		else b = [Wa,d,e];
		return b
	}});
	sb.spline = Ka;
	Ka = wb(Ka, {type:"areaspline"});
	sb.areaspline = Ka;
	var Zc = wb(lb, {type:"column",pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",r:"borderRadius"},init:function()
	{
		lb.prototype.init.apply(this, arguments);
		var a = this,b = a.chart;
		b.hasColumn = true;
		b.hasRendered && t(b.series, function(c)
		{
			if (c.type == a.type)c.isDirty = true
		})
	},translate:function()
	{
		var a = this,b = a.chart,
				c = 0,d = a.xAxis.reversed,e = a.xAxis.categories,f = {},g,i;
		lb.prototype.translate.apply(a);
		t(b.series, function(A)
		{
			if (A.type == a.type)
			{
				if (A.options.stacking)
				{
					g = A.stackKey;
					if (f[g] === Qa)f[g] = c++;
					i = f[g]
				}
				else i = c++;
				A.columnIndex = i
			}
		});
		var j = a.options,k = a.data,n = a.closestPoints;
		b = ab(k[1] ? k[n].plotX - k[n - 1].plotX : b.plotSizeX / (e ? e.length : 1));
		e = b * j.groupPadding;
		n = (b - 2 * e) / c;
		var z = j.pointWidth,E = L(z) ? (n - z) / 2 : n * j.pointPadding,ia = y(z, n - 2 * E),T = E + (e + ((d ? c - a.columnIndex : a.columnIndex) || 0) * n - b / 2) * (d ? -1 : 1),K = a.yAxis.getThreshold(j.threshold ||
				0),u = y(j.minPointLength, 5);
		t(k, function(A)
		{
			var ba = A.plotY,ya = A.yBottom || K,ea = A.plotX + T,qa = dd(nb(ba, ya)),$a = dd(Ga(ba, ya) - qa),jb;
			if (ab($a) < u)
			{
				if (u)
				{
					$a = u;
					qa = ab(qa - K) > u ? ya - u : K - (ba <= K ? u : 0)
				}
				jb = qa - 3
			}
			ma(A, {barX:ea,barY:qa,barW:ia,barH:$a});
			A.shapeType = "rect";
			A.shapeArgs = {x:ea,y:qa,width:ia,height:$a,r:j.borderRadius};
			A.trackerArgs = L(jb) && wa(A.shapeArgs, {height:Ga(6, $a + 3),y:jb})
		})
	},getSymbol:function()
	{
	},drawGraph:function()
	{
	},drawPoints:function()
	{
		var a = this,b = a.options,c = a.chart.renderer,d,e;
		t(a.data, function(f)
		{
			var g =
					f.plotY;
			if (g !== Qa && !isNaN(g))
			{
				d = f.graphic;
				e = f.shapeArgs;
				if (d)
				{
					Sc(d);
					d.animate(e)
				}
				else f.graphic = c[f.shapeType](e).attr(f.pointAttr[f.selected ? "select" : cb]).add(a.group).shadow(b.shadow)
			}
		})
	},drawTracker:function()
	{
		var a = this,b = a.chart,c = b.renderer,d,e,f = +new Date,g = a.options.cursor,i = g && {cursor:g},j;
		t(a.data, function(k)
		{
			e = k.tracker;
			d = k.trackerArgs || k.shapeArgs;
			if (k.y !== null)if (e)e.attr(d);
			else k.tracker = c[k.shapeType](d).attr({isTracker:f,fill:Ud,visibility:a.visible ? Ab : tb,zIndex:1}).on(Gb ? "touchstart" :
						"mouseover",
						function(n)
						{
							j = n.relatedTarget || n.fromElement;
							b.hoverSeries != a && xa(j, "isTracker") != f && a.onMouseOver();
							k.onMouseOver()
						}).on("mouseout",
						function(n)
						{
							if (!a.options.stickyTracking)
							{
								j = n.relatedTarget || n.toElement;
								xa(j, "isTracker") != f && a.onMouseOut()
							}
						}).css(i).add(b.trackerGroup)
		})
	},animate:function(a)
	{
		var b = this,c = b.data;
		if (!a)
		{
			t(c, function(d)
			{
				var e = d.graphic;
				if (e)
				{
					e.attr({height:0,y:b.yAxis.translate(0, 0, 1)});
					e.animate({height:d.barH,y:d.barY}, b.options.animation)
				}
			});
			b.animate = null
		}
	},remove:function()
	{
		var a =
				this,b = a.chart;
		b.hasRendered && t(b.series, function(c)
		{
			if (c.type == a.type)c.isDirty = true
		});
		lb.prototype.remove.apply(a, arguments)
	}});
	sb.column = Zc;
	Ka = wb(Zc, {type:"bar",init:function(a)
	{
		a.inverted = this.inverted = true;
		Zc.prototype.init.apply(this, arguments)
	}});
	sb.bar = Ka;
	Ka = wb(lb, {type:"scatter",translate:function()
	{
		var a = this;
		lb.prototype.translate.apply(a);
		t(a.data, function(b)
		{
			b.shapeType = "circle";
			b.shapeArgs = {x:b.plotX,y:b.plotY,r:a.chart.options.tooltip.snap}
		})
	},drawTracker:function()
	{
		var a = this,b = a.options.cursor,
				c = b && {cursor:b},d;
		t(a.data, function(e)
		{
			(d = e.graphic) && d.attr({isTracker:true}).on("mouseover",
					function()
					{
						a.onMouseOver();
						e.onMouseOver()
					}).on("mouseout",
					function()
					{
						a.options.stickyTracking || a.onMouseOut()
					}).css(c)
		})
	},cleanData:function()
	{
	}});
	sb.scatter = Ka;
	Ka = wb(zc, {init:function()
	{
		zc.prototype.init.apply(this, arguments);
		var a = this,b;
		ma(a, {visible:a.visible !== false,name:y(a.name, "Slice")});
		b = function()
		{
			a.slice()
		};
		Pa(a, "select", b);
		Pa(a, "unselect", b);
		return a
	},setVisible:function(a)
	{
		var b = this.series.chart,
				c = this.tracker,d = this.dataLabel,e = this.connector,f;
		f = (this.visible = a = a === Qa ? !this.visible : a) ? "show" : "hide";
		this.group[f]();
		c && c[f]();
		d && d[f]();
		e && e[f]();
		this.legendItem && b.legend.colorizeItem(this, a)
	},slice:function(a, b, c)
	{
		var d = this.series.chart,e = this.slicedTranslation;
		Kb(c, d);
		y(b, true);
		a = this.sliced = L(a) ? a : !this.sliced;
		this.group.animate({translateX:a ? e[0] : d.plotLeft,translateY:a ? e[1] : d.plotTop})
	}});
	Ka = wb(lb, {type:"pie",isCartesian:false,pointClass:Ka,pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",
		fill:"color"},getColor:function()
	{
		this.initialColor = Hb
	},animate:function()
	{
		var a = this;
		t(a.data, function(b)
		{
			var c = b.graphic;
			b = b.shapeArgs;
			var d = -Ub / 2;
			if (c)
			{
				c.attr({r:0,start:d,end:d});
				c.animate({r:b.r,start:b.start,end:b.end}, a.options.animation)
			}
		});
		a.animate = null
	},translate:function()
	{
		var a = 0,b = -0.25,c = this.options,d = c.slicedOffset,e = d + c.borderWidth,f = c.center,g = this.chart,i = g.plotWidth,j = g.plotHeight,k,n,z,E = this.data,ia = 2 * Ub,T,K = nb(i, j),u,A,ba,ya = c.dataLabels.distance;
		f.push(c.size, c.innerSize ||
				0);
		f = jc(f, function(ea, qa)
		{
			return(u = /%$/.test(ea)) ? [i,j,K,K][qa] * oa(ea) / 100 : ea
		});
		this.getX = function(ea, qa)
		{
			z = Ta.asin((ea - f[1]) / (f[2] / 2 + ya));
			return f[0] + (qa ? -1 : 1) * ub(z) * (f[2] / 2 + ya)
		};
		this.center = f;
		t(E, function(ea)
		{
			a += ea.y
		});
		t(E, function(ea)
		{
			T = a ? ea.y / a : 0;
			k = V(b * ia * 1E3) / 1E3;
			b += T;
			n = V(b * ia * 1E3) / 1E3;
			ea.shapeType = "arc";
			ea.shapeArgs = {x:f[0],y:f[1],r:f[2] / 2,innerR:f[3] / 2,start:k,end:n};
			z = (n + k) / 2;
			ea.slicedTranslation = jc([ub(z) * d + g.plotLeft,yb(z) * d + g.plotTop], V);
			A = ub(z) * f[2] / 2;
			ba = yb(z) * f[2] / 2;
			ea.tooltipPos = [f[0] +
					A * 0.7,f[1] + ba * 0.7];
			ea.labelPos = [f[0] + A + ub(z) * ya,f[1] + ba + yb(z) * ya,f[0] + A + ub(z) * e,f[1] + ba + yb(z) * e,f[0] + A,f[1] + ba,ya < 0 ? "center" : z < ia / 4 ? "left" : "right",z];
			ea.percentage = T * 100;
			ea.total = a
		});
		this.setTooltipPoints()
	},render:function()
	{
		this.getAttribs();
		this.drawPoints();
		this.options.enableMouseTracking !== false && this.drawTracker();
		this.drawDataLabels();
		this.options.animation && this.animate && this.animate();
		this.isDirty = false
	},drawPoints:function()
	{
		var a = this.chart,b = a.renderer,c,d,e,f;
		t(this.data, function(g)
		{
			d =
					g.graphic;
			f = g.shapeArgs;
			e = g.group;
			if (!e)e = g.group = b.g("point").attr({zIndex:5}).add();
			c = g.sliced ? g.slicedTranslation : [a.plotLeft,a.plotTop];
			e.translate(c[0], c[1]);
			if (d)d.animate(f);
			else g.graphic = b.arc(f).attr(ma(g.pointAttr[cb], {"stroke-linejoin":"round"})).add(g.group);
			g.visible === false && g.setVisible(false)
		})
	},drawDataLabels:function()
	{
		var a = this.data,b,c = this.chart,d = this.options.dataLabels,e = y(d.connectorPadding, 10),f = y(d.connectorWidth, 1),g,i,j = d.distance > 0,k,n,z = this.center[1],E = [
			[],
			[],
			[],
			[]
		],
				ia,T,K,u,A,ba,ya,ea = 4,qa;
		lb.prototype.drawDataLabels.apply(this);
		t(a, function($a)
		{
			var jb = $a.labelPos[7];
			E[jb < 0 ? 0 : jb < Ub / 2 ? 1 : jb < Ub ? 2 : 3].push($a)
		});
		E[1].reverse();
		E[3].reverse();
		for (ya = function($a, jb)
		{
			return $a.y > jb.y
		}; ea--;)
		{
			a = 0;
			b = [].concat(E[ea]);
			b.sort(ya);
			for (qa = b.length; qa--;)b[qa].rank = qa;
			for (u = 0; u < 2; u++)
			{
				n = (ba = ea % 3) ? 9999 : -9999;
				A = ba ? -1 : 1;
				for (qa = 0; qa < E[ea].length; qa++)
				{
					b = E[ea][qa];
					if (g = b.dataLabel)
					{
						i = b.labelPos;
						K = Ab;
						ia = i[0];
						T = i[1];
						k || (k = g && g.getBBox().height);
						if (j)if (u && b.rank < a)K = tb; else if (!ba &&
								T < n + k || ba && T > n - k)
						{
							T = n + A * k;
							ia = this.getX(T, ea > 1);
							if (!ba && T + k > z || ba && T - k < z)if (u)K = tb;
							else a++
						}
						if (b.visible === false)K = tb;
						if (K == Ab)n = T;
						if (u)
						{
							g.attr({visibility:K,align:i[6]})[g.moved ? "animate" : "attr"]({x:ia + d.x + ({left:e,right:-e}[i[6]] || 0),y:T + d.y});
							g.moved = true;
							if (j && f)
							{
								g = b.connector;
								i = [Wa,ia + (i[6] == "left" ? 5 : -5),T,Ba,ia,T,Ba,i[2],i[3],Ba,i[4],i[5]];
								if (g)
								{
									g.animate({d:i});
									g.attr("visibility", K)
								}
								else b.connector = g = this.chart.renderer.path(i).attr({"stroke-width":f,stroke:d.connectorColor || "#606060",visibility:K,
									zIndex:3}).translate(c.plotLeft, c.plotTop).add()
							}
						}
					}
				}
			}
		}
	},drawTracker:Zc.prototype.drawTracker,getSymbol:function()
	{
	}});
	sb.pie = Ka;
	hb.Highcharts = {Chart:Hd,dateFormat:Mc,pathAnim:Yc,getOptions:function()
	{
		return Ra
	},numberFormat:Gd,Point:zc,Color:Vb,Renderer:Qd,seriesTypes:sb,setOptions:function(a)
	{
		Ra = wa(Ra, a);
		Bd();
		return Ra
	},Series:lb,addEvent:Pa,createElement:eb,discardElement:Fc,css:La,each:t,extend:ma,map:jc,merge:wa,pick:y,extendClass:wb,version:"2.1.2"}
})();
